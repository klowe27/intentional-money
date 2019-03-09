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

class AddTransactionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      accountList: {},
      categoryList: {}
    };
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accountList: nextProps.accounts });
    this.setState({ categoryList: nextProps.categories });
  }

  handleCloseForm(){
    this.props.toggleAddTransactionForm();
  }

  handleAddTransaction(e) {
    e.preventDefault();
    this.props.toggleAddTransactionForm();
    const db = firebase.database();
    const transactions = db.ref('Transactions/' + this.props.user.uid);
    transactions.push({
      transactionDate: _transactionDate.value,
      vendor: _vendor.value,
      amount: _amount.value,
      category: _category.value,
      account: _account.value,
      type: _type.value,
      cleared: _cleared.value
    });
    this.updateCategory();
    this.updateAccount();
  }

  updateCategory(){
    let newName;
    let newBudget;
    let newActivity;
    let category = firebase.database().ref('Categories/' + this.props.user.uid + '/' + _category.value);
    category.on('value', (snap) => {
      newName = snap.val().name;
      newBudget = snap.val().budget;
      newActivity = (_type.value === 'expense') ? (parseInt(snap.val().activity) - parseInt(_amount.value)) : (parseInt(snap.val().activity) + parseInt(_amount.value));
    });
    firebase.database().ref('Categories/' + this.props.user.uid + '/' + _category.value).set({
      name: newName,
      budget: newBudget,
      activity: newActivity
    });
  }

  updateAccount(){
    if (_cleared.value === 'Cleared') {
      let newName;
      let newBalance;
      let account = firebase.database().ref('Accounts/' + this.props.user.uid + '/' + _account.value);
      account.on('value', (snap) => {
        newName = snap.val().name;
        newBalance = (_type.value === 'expense') ? (parseInt(snap.val().balance) - parseInt(_amount.value)) : (parseInt(snap.val().balance) + parseInt(_amount.value));
      });
      firebase.database().ref('Accounts/' + this.props.user.uid + '/' + _account.value).set({
        name: newName,
        balance: newBalance
      });
    }
  }

  render() {
    if (!this.props.showAddTransactionForm){
      return(
        null
      );
    } else {
      return (
        <div className='modal-background'>
          <form onSubmit={this.handleAddTransaction} className='form'>
            <span className='close' onClick={this.handleCloseForm}>x</span>
            <h2>Add Transaction</h2>
            <div className='form-group'>
              <label for='amount'>Amount</label>
              <input
                type='number'
                step='any'
                min='0'
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
                {Object.keys(this.state.accountList).map(accountId =>
                  <option value={accountId} key={accountId}>{this.state.accountList[accountId].name}</option>
                )}
              </select>
            </div>
            <div className='form-group'>
              <label for='category'>Category</label>
              <select ref={(input) => {_category = input;}} required>
                {Object.keys(this.state.categoryList).map(categoryId =>
                  <option value={categoryId} key={categoryId}>{this.state.categoryList[categoryId].name}</option>
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
}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.bool,
  toggleAddTransactionForm: PropTypes.func,
  accounts: PropTypes.object,
  categories: PropTypes.object,
  user: PropTypes.object
};

export default AddTransactionForm;
