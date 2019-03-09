import React from 'react';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';
import Button from './Button';
import AddCategoryForm from './AddCategoryForm';
import './assets/styles/CategoryItem.css';

class Budget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddCategoryForm: false,
      categories: {}
    };
    this.toggleCategoryForm = this.toggleCategoryForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ categories: nextProps.categories});
  }

  toggleCategoryForm(){
    this.setState({showAddCategoryForm: !this.state.showAddCategoryForm});
  }

  render() {
    return (
      <div className='container'>
        <h1>Budget</h1>
        <div className='form-group'>
          <select className='dropdown' onChange={this.handleSortBy}>
            <option value='3/19'>March 2019</option>
            <option value='2/19'>February 2019</option>
          </select>
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
          categories={this.state.categories}
          user={this.props.user}
        />
        <Button
          action={this.toggleCategoryForm}
          name='+ category'
        />
        <AddCategoryForm
          showAddCategoryForm={this.state.showAddCategoryForm}
          toggleCategoryForm={this.toggleCategoryForm}
          user={this.props.user}
        />
      </div>
    );
  }
}

Budget.propTypes = {
  user: PropTypes.object,
  categories: PropTypes.object
};

export default Budget;
