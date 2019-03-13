import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';

function UpdateTransactionForm({ selectTransaction, selectedTransaction, accounts, categories, user }) {
  let currentAmount;
  let currentTransactionDate;
  let currentVendor;
  let currentAccount;
  let currentType;
  let currentCleared;
  let currentCategory;

  let _newAmount;
  let _newTransactionDate;
  let _newVendor;
  let _newAccount;
  let _newType;
  let _newCleared;
  let _newCategory;

  let currentTransaction = firebase.database().ref('Transactions/' + user.uid + '/' + selectedTransaction);
  currentTransaction.on('value', (snap) => {
    currentAmount = snap.val().amount;
    currentTransactionDate = snap.val().transactionDate;
    currentVendor = snap.val().vendor;
    currentAccount = snap.val().account;
    currentType = snap.val().type;
    currentCleared = snap.val().cleared;
    currentCategory = snap.val().category;
  });

  function handleCloseForm(){
    selectTransaction(null);
  }

  function handleUpdateTransaction(e) {
    e.preventDefault();
    currentTransaction.set({
      transactionDate: _newTransactionDate.value,
      vendor: _newVendor.value,
      amount: _newAmount.value,
      category: _newCategory.value,
      account: _newAccount.value,
      type: _newType.value,
      cleared: _newCleared.value
    });
    selectTransaction(null);
  }

  function getCategoryNameByKey(key){
    let categoryName;
    let category =  firebase.database().ref('Categories/' + user.uid + '/' + key);
    category.on('value', (snap) => {
      (snap.val() !== null) ? categoryName = snap.val().name : categoryName = 'Deleted';
    });
    return categoryName;
  }

  return (
    <div className='modal-background'>
      <form onSubmit={handleUpdateTransaction} className='form'>
        <span className='close' onClick={handleCloseForm}>x</span>
        <h2>Update Transaction</h2>
        <div className='form-group'>
          <label for='amount'>Amount</label>
          <input
            type='number'
            min='0.00'
            step='0.001'
            defaultValue={currentAmount}
            ref={(input)=>{_newAmount=input;}}
            required
          />
        </div>
        <div className='form-group'>
          <label for='transactionDate'>Date</label>
          <input
            type='date'
            defaultValue={currentTransactionDate}
            ref={(input)=>{_newTransactionDate=input;}}
            required
          />
        </div>
        <div className='form-group'>
          <label for='vendor'>Vendor</label>
          <input
            type='text'
            defaultValue={currentVendor}
            ref={(input)=>{_newVendor=input;}}
            required
          />
        </div>
        <div className='form-group'>
          <label for='account'>Account</label>
          <select ref={(input) => {_newAccount = input;}} defaultValue={currentAccount} required>
            {Object.keys(accounts).map(accountId =>
              <option value={accountId} key={accountId}>{accounts[accountId].name}</option>
            )}
          </select>
        </div>
        <div className='form-group'>
          <label for='category'>Category</label>
          <select ref={(input) => {_newCategory = input;}} defaultValue={currentCategory} required>
            {Object.keys(categories).map(categoryId =>
              <option value={categoryId} key={categoryId}>{getCategoryNameByKey(categoryId)}</option>
            )}
          </select>
        </div>
        <div className='form-group'>
          <label for='type'>Type</label>
          <select ref={(input) => {_newType = input;}} defaultValue={currentType} required>
            <option value='expense'>Expense</option>
            <option value='income'>Income</option>
          </select>
        </div>
        <div className='form-group'>
          <label for='cleared'>Cleared?</label>
          <select ref={(input) => {_newCleared = input;}} defaultValue={currentCleared} required>
            <option value='Cleared'>Yes</option>
            <option value='Uncleared'>No</option>
          </select>
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

UpdateTransactionForm.propTypes = {
  selectTransaction: PropTypes.func,
  selectedTransaction: PropTypes.string,
  accounts: PropTypes.object,
  categories: PropTypes.object,
  user: PropTypes.object
};

export default UpdateTransactionForm;
