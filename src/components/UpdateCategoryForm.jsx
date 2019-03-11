import React from 'react';
import PropTypes from 'prop-types';

function UpdateCategoryForm({selectCategory, selectedCategory, user}) {
  let currentName;
  let currentBudget;
  let _newName = null;
  let _newBudget = null;
  let currentCategory = firebase.database().ref('Categories/' + user.uid + '/' + selectedCategory);
  currentCategory.on('value', (snap) => {
    currentName = snap.val().name;
    currentBudget = snap.val().budget;
  });

  function handleUpdateCategory(e){
    e.preventDefault();
    currentCategory.set({
      name: _newName.value,
      budget: _newBudget.value
    });
    selectCategory(null);
  }

  function handleCloseForm(){
    selectCategory(null);
  }

  return(
    <div className='modal-background'>
      <form onSubmit={handleUpdateCategory} className='form'>
        <span className='close' onClick={handleCloseForm}>x</span>
        <h2>Update Category</h2>
        <div className='form-group'>
          <label from='name'>Name</label>
          <input
            type='text'
            defaultValue={currentName}
            ref={(input)=>{_newName=input;}}
            required
          />
        </div>
        <div className='form-group'>
          <label from='budget'>Budget</label>
          <input
            type='number'
            min='0.00'
            step='0.001'
            defaultValue={currentBudget}
            ref={(input)=>{_newBudget=input;}}
            required
          />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

UpdateCategoryForm.propTypes = {
  selectCategory: PropTypes.func,
  selectedCategory: PropTypes.string,
  user: PropTypes.object
};

export default UpdateCategoryForm;
