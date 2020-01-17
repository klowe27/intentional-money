import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

function UpdateAccountForm({ selectAccount, selectedAccount, user}) {
  let currentName;
  let currentBalance;
  let _newName = null;
  let currentAccount = firebase.database().ref('Accounts/' + user.uid + '/' + selectedAccount);
  currentAccount.on('value', (snap) => {
    currentName = snap.val().name ;
    currentBalance = snap.val().balance ;
  });

  function handleUpdateAccount(e){
    e.preventDefault();
    currentAccount.set({
      name: _newName.value,
      balance: currentBalance
    });
    selectAccount(null);
  }

  function handleCloseForm(){
    selectAccount(null);
  }

  return(
    <div className='modal-background'>
      <form onSubmit={handleUpdateAccount} className='form'>
        <span className='close' onClick={handleCloseForm}>x</span>
        <h2>Update Account</h2>
        <div className='form-group'>
          <label from='name'>Name</label>
          <input
            type='text'
            defaultValue={currentName}
            ref={(input)=>{_newName=input;}}
            required
          />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

UpdateAccountForm.propTypes = {
  selectAccount: PropTypes.func,
  selectedAccount: PropTypes.string,
  user: PropTypes.object
};

export default UpdateAccountForm;
