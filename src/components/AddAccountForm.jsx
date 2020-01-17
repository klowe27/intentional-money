import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

function AddAccountForm({ toggleAccountForm, user}) {
  let _name = null;
  let _balance = null;
  const db = firebase.database();

  function handleAddAccount(e){
    e.preventDefault();
    toggleAccountForm();
    const accounts = db.ref('Accounts/' + user.uid);
    accounts.push({
      name: _name.value,
      balance: _balance.value
    });
  }

  return(
    <div className='modal-background'>
      <form onSubmit={handleAddAccount} className='form'>
        <span className='close' onClick={toggleAccountForm}>x</span>
        <h2>Add Account</h2>
        <div className='form-group'>
          <label from='name'>Name</label>
          <input
            type='text'
            ref={(input)=>{_name=input;}}
            required
          />
        </div>
        <div className='form-group'>
          <label from='balance'>Balance</label>
          <input
            type='number'
            min='0.00'
            step='0.001'
            ref={(input)=>{_balance=input;}}
            required
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

AddAccountForm.propTypes = {
  toggleAccountForm: PropTypes.func,
  user: PropTypes.object
};

export default AddAccountForm;
