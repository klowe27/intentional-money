import React from 'react';
import PropTypes from 'prop-types';

function AddCategoryForm({showAddCategoryForm, toggleCategoryForm, user}) {
  let _name = null;
  let _budget = null;
  const db = firebase.database();

  function handleAddCategory(e){
    e.preventDefault();
    toggleCategoryForm();
    const categories = db.ref('Categories/' + user.uid);
    categories.push({
      name: _name.value,
      budget: _budget.value
    });
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
              required
            />
          </div>
          <div className='form-group'>
            <label from='budget'>Budget</label>
            <input
              type='number'
              min='0.00'
              step='0.001'
              ref={(input)=>{_budget=input;}}
              required
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
  toggleCategoryForm: PropTypes.func,
  user: PropTypes.object
};

export default AddCategoryForm;
