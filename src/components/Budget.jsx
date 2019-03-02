import React from 'react';
import CategoryList from './CategoryList';
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
      <div><h2>Budget</h2>
        <CategoryList/>
        <Button 
          action={this.toggleCategoryForm}
          name='+ category'
        /> 
        <AddCategoryForm
          showAddCategoryForm={this.state.showAddCategoryForm}
          toggleCategoryForm={this.toggleCategoryForm}
        />
      </div>
    );
  }
}

export default Budget;