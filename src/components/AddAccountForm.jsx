import React from 'react';
import PropTypes from 'prop-types';

function AddAccountForm({showAddAccountForm, toggleAccountForm}) {
  let _name = null;
  let _balance = null;
  
  function handleAddCategory(e){
    e.preventDefault();
    console.log(_name.value);
    console.log(_balance.value);
    toggleAccountForm();
  }
  
  if (!showAddAccountForm){
    return(
      null
    );
  } else {
    return(
      <div className='modal-background'> 
        <form onSubmit={handleAddCategory} className='form'>
          <span className='close' onClick={toggleAccountForm}>x</span>
          <h2>Add Account</h2>
          <div className='form-group'>
            <label from='name'>Name</label>
            <input
              type='text'
              placeholder='Checking, for example'
              ref={(input)=>{_name=input;}}
            />
          </div>
          <div className='form-group'>
            <label from='balance'>Current balance</label>
            <input
              type='number'
              ref={(input)=>{_balance=input;}}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

AddAccountForm.propTypes = {
  showAddAccountForm: PropTypes.bool,
  toggleAccountForm: PropTypes.func
};

export default AddAccountForm;