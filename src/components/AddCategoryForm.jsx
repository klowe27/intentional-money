import React from 'react';
import PropTypes from 'prop-types';

function AddCategoryForm({showAddCategoryForm, toggleCategoryForm}) {
  let _name = null;
  let _budget = null;
  
  function handleAddCategory(e){
    e.preventDefault();
    console.log(_name.value);
    console.log(_budget.value);
    toggleCategoryForm();
  }
  
  if (!showAddCategoryForm){
    return(
      null
    );
  } else {
    return(
      <div className='modal-background'> 
        <form onSubmit={handleAddCategory} className='form'>
          <span className='close' onClick={toggleCategoryForm}>x</span>
          <h2>Add Category</h2>
          <div className='form-group'>
            <label from='name'>Name</label>
            <input
              type='text'
              ref={(input)=>{_name=input;}}
            />
          </div>
          <div className='form-group'>
            <label from='budget'>Budget</label>
            <input
              type='number'
              ref={(input)=>{_budget=input;}}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

AddCategoryForm.propTypes = {
  showAddCategoryForm: PropTypes.bool,
  toggleCategoryForm: PropTypes.func
};

export default AddCategoryForm;