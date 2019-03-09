import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';

function AddAccountForm({showAddAccountForm, toggleAccountForm, user}) {
  let _name = null;
  let _balance = null;
  const db = firebase.database();

  function handleAddAccount(e){
    e.preventDefault();
    const accounts = db.ref('Accounts/' + user.uid);
    toggleAccountForm();
    accounts.push({
      name: _name.value,
      balance: _balance.value
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
              required
            />
          </div>
          <div className='form-group'>
            <label from='balance'>Balance</label>
            <input
              type='number'
              step='any'
              ref={(input)=>{_balance=input;}}
              required
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
  toggleAccountForm: PropTypes.func,
  user: PropTypes.object
};

export default AddAccountForm;
