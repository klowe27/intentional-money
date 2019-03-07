import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';

function AddAccountForm({showAddAccountForm, toggleAccountForm}) {
  let _name = null;
  let _balance = null;
  const db = firebase.database();

  function handleAddAccount(e){
    e.preventDefault();
    toggleAccountForm();
    const accounts = db.ref('Accounts/');
    return () => accounts.push({
      names: _name.value,
      balance: _balance.value,
    });
  }

  if (!showAddAccountForm){
    return(
      null
    );
  } else {
    return(
      <div className='modal-background'>
        <form onSubmit={handleAddAccount} className='form'>
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
            <label from='balance'>Balance</label>
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
