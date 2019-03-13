import React from 'react';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';
import Button from './Button';
import AddCategoryForm from './AddCategoryForm';
import UpdateCategoryForm from './UpdateCategoryForm';
import NumberFormat from 'react-number-format';
import './assets/styles/CategoryItem.css';
import './assets/styles/Budget.css';

let _month = null;

class Budget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddCategoryForm: false,
      selectedCategory: null
    };
    this.toggleCategoryForm = this.toggleCategoryForm.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.handleSelectMonth = this.handleSelectMonth.bind(this);
    this.handleTotalBudgeted = this. handleTotalBudgeted.bind(this);
    this.handleTotalActivity = this.handleTotalActivity.bind(this);
  }

  toggleCategoryForm(){
    this.setState({showAddCategoryForm: !this.state.showAddCategoryForm});
  }

  selectCategory(id){
    this.setState({selectedCategory: id});
  }

  handleSelectMonth(){
    this.props.selectMonth(_month.value);
  }

  handleTotalBudgeted(){
    let total = 0;
    Object.keys(this.props.categories).map( categoryId => {
      let categoryBudget = parseFloat(this.props.categories[categoryId].budget);
      total += categoryBudget;
    });
    return total;
  }

  handleTotalActivity(){
    let totalActivity = 0;
    Object.keys(this.props.transactions).map( transactionId => {
      let transaction = this.props.transactions[transactionId];
      let date = transaction.transactionDate;
      if (date.slice(0, -3) === this.props.selectedMonth) {
        (transaction.type === 'expense') ? totalActivity -= parseFloat(transaction.amount) : totalActivity += parseFloat(transaction.amount);
      }
    });
    return totalActivity;
  }

  handleMonthOutput(){
    let months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'};
    let month = this.props.selectedMonth.slice(5, 7)
    month = months[month];
    let year = this.props.selectedMonth.slice(0, -3);
    return month + ' ' + year;
  }

  render() {
    return (
      <div className='container'>
        <h1>Budget</h1>
        <div className='form-group'>
          <input
            type='month'
            name='budget-month'
            defaultValue={this.props.selectedMonth}
            className='dropdown'
            ref={(input)=>{_month=input;}}
            onChange={this.handleSelectMonth}/>
        </div>
        <div className='budgetDetails'>
          <h2 className='month'>{this.handleMonthOutput()}</h2>
          <div className='overviewGrid'>
            <div className='budgetLabel'><span className='name'>Budgeted:</span>
            <NumberFormat
              value={this.handleTotalBudgeted()}
              displayType={'text'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={'$'} /></div>
              <div className='budgetLabel'><span className='name'>Activity: </span>
              <NumberFormat
                value={this.handleTotalActivity()}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={'$'} /></div>
              <div className='budgetLabel'><span className='name'>Remaining: </span>
              <NumberFormat
                value={this.handleTotalBudgeted()+this.handleTotalActivity()}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={'$'} /></div>
          </div>
        </div>
        <div className='categoryRow categoryHeader'>
          <div>Category</div>
          <div>Budget</div>
          <div>Activity</div>
          <div>Remaining</div>
          <div></div>
          <div></div>
        </div>
        <CategoryList
          categories={this.props.categories}
          transactions={this.props.transactions}
          user={this.props.user}
          selectCategory={this.selectCategory}
          selectedMonth={this.props.selectedMonth}
        />
        <Button
          action={this.toggleCategoryForm}
          name='+ category'
        />
        { !this.state.showAddCategoryForm ? null :
        <AddCategoryForm
          toggleCategoryForm={this.toggleCategoryForm}
          selectedMonth={this.props.selectedMonth}
          user={this.props.user}
        />}
        {!this.state.selectedCategory ? null :
        <UpdateCategoryForm
          selectCategory={this.selectCategory}
          selectedCategory={this.state.selectedCategory}
          selectedMonth={this.props.selectedMonth}
          user={this.props.user}
        />}
      </div>
    );
  }
}

Budget.propTypes = {
  user: PropTypes.object,
  transactions: PropTypes.object,
  categories: PropTypes.object,
  selectMonth: PropTypes.func,
  selectedMonth: PropTypes.string
};

export default Budget;
