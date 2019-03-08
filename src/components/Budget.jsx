import React from 'react';
import CategoryList from './CategoryList';
import PropTypes from 'prop-types';
import Button from './Button';
import AddCategoryForm from './AddCategoryForm';

class Budget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddCategoryForm: false,
    };
    this.toggleCategoryForm = this.toggleCategoryForm.bind(this);
  }

  toggleCategoryForm(){
    this.setState({showAddCategoryForm: !this.state.showAddCategoryForm});
  }

  render() {
    return (
      <div className='container'>
        <h1>Budget</h1>
        <div className='form-group dropdown'>
          <select onChange={this.handleSortBy}>
            <option value='3/19'>March 2019</option>
            <option value='2/19'>February 2019</option>
            <option value='1/19'>January 2019</option>
            <option value='12/18'>December 2018</option>
          </select>
        </div>
        <CategoryList/>
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
  user: PropTypes.object
}

export default Budget;
