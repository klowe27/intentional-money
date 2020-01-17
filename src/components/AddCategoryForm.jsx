import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

function AddCategoryForm({ toggleCategoryForm, selectedMonth, user}) {
  let _name = null;
  let _budget = null;
  const db = firebase.database();

  function handleAddCategory(e){
    e.preventDefault();
    toggleCategoryForm();
    const categories = db.ref('Categories/' + user.uid);
    let categoryId = categories.push({
      name: _name.value
    });
    const budget = db.ref('Budget/' + selectedMonth + '/' + user.uid + '/' + categoryId.key);
    budget.set({
      budget: _budget.value
    });
  }

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

AddCategoryForm.propTypes = {
  toggleCategoryForm: PropTypes.func,
  selectedMonth: PropTypes.string,
  user: PropTypes.object
};

export default AddCategoryForm;
