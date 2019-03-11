import React from 'react';
import PropTypes from 'prop-types';
import Firebase from 'firebase';

let _amount;
let _transactionDate;
let _vendor;
let _account;
let _type;
let _cleared;
let _category;

function AddTransactionForm({ showAddTransactionForm, toggleAddTransactionForm, accounts, categories, user }) {

  function handleCloseForm(){
    toggleAddTransactionForm();
  }

  function handleAddTransaction(e) {
    e.preventDefault();
    toggleAddTransactionForm();
    const db = firebase.database();
    const transactions = db.ref('Transactions/' + user.uid);
    transactions.push({
      transactionDate: _transactionDate.value,
      vendor: _vendor.value,
      amount: _amount.value,
      category: _category.value,
      account: _account.value,
      type: _type.value,
      cleared: _cleared.value
    });
    updateCategory();
    updateAccount();
  }

  function updateCategory(){
    let newName;
    let newBudget;
    let newActivity;
    let category = firebase.database().ref('Categories/' + user.uid + '/' + _category.value);
    category.on('value', (snap) => {
      newName = snap.val().name;
      newBudget = snap.val().budget;
      newActivity = (_type.value === 'expense') ? (parseFloat(snap.val().activity) - parseFloat(_amount.value)) : (parseFloat(snap.val().activity) + parseFloat(_amount.value));
    });
    firebase.database().ref('Categories/' + user.uid + '/' + _category.value).set({
      name: newName,
      budget: newBudget,
      activity: newActivity
    });
  }

  function updateAccount(){
    if (_cleared.value === 'Cleared') {
      let newName;
      let newBalance;
      let account = firebase.database().ref('Accounts/' + user.uid + '/' + _account.value);
      account.on('value', (snap) => {
        newName = snap.val().name;
        newBalance = (_type.value === 'expense') ? (parseFloat(snap.val().balance) - parseFloat(_amount.value)) : (parseFloat(snap.val().balance) + parseFloat(_amount.value));
      });
      firebase.database().ref('Accounts/' + user.uid + '/' + _account.value).set({
        name: newName,
        balance: newBalance
      });
    }
  }


    if (!showAddTransactionForm){
      return(
        null
      );
    } else {
      return (
        <div className='modal-background'>
          <form onSubmit={handleAddTransaction} className='form'>
            <span className='close' onClick={handleCloseForm}>x</span>
            <h2>Add Transaction</h2>
            <div className='form-group'>
              <label for='amount'>Amount</label>
              <input
                type='number'
                min='0.00'
                step='0.001'
                ref={(input)=>{_amount=input;}}
                required
              />
            </div>
            <div className='form-group'>
              <label for='transactionDate'>Date</label>
              <input
                type='date'
                ref={(input)=>{_transactionDate=input;}}
                required
              />
            </div>
            <div className='form-group'>
              <label for='vendor'>Vendor</label>
              <input
                type='text'
                ref={(input)=>{_vendor=input;}}
                required
              />
            </div>
            <div className='form-group'>
              <label for='account'>Account</label>
              <select ref={(input) => {_account = input;}} required>
                {Object.keys(accounts).map(accountId =>
                  <option value={accountId} key={accountId}>{accounts[accountId].name}</option>
                )}
              </select>
            </div>
            <div className='form-group'>
              <label for='category'>Category</label>
              <select ref={(input) => {_category = input;}} required>
                {Object.keys(categories).map(categoryId =>
                  <option value={categoryId} key={categoryId}>{categories[categoryId].name}</option>
                )}
              </select>
            </div>
            <div className='form-group'>
              <label for='type'>Type</label>
              <select ref={(input) => {_type = input;}} required>
                <option value='expense'>Expense</option>
                <option value='income'>Income</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='cleared'>Cleared?</label>
              <select ref={(input) => {_cleared = input;}} required>
                <option value='Cleared'>Yes</option>
                <option value='Uncleared'>No</option>
              </select>
            </div>
            <button type='submit'>Add</button>
          </form>
        </div>
      );
    }

}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.bool,
  toggleAddTransactionForm: PropTypes.func,
  accounts: PropTypes.object,
  categories: PropTypes.object,
  user: PropTypes.object
};

export default AddTransactionForm;
