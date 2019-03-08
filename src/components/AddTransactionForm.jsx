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
      accountList: {}
    };
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accountList: nextProps.accounts });
  }

  handleAddTransaction(e) {
    e.preventDefault();
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
    this.props.toggleAddTransactionForm();
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
            <span className='close' onClick={this.handleAddTransaction}>x</span>
            <h2>Add Transaction</h2>
            <div className='form-group'>
              <label for='amount'>Amount</label>
              <input
                type='number'
                ref={(input)=>{_amount=input;}}
              />
            </div>
            <div className='form-group'>
              <label for='transactionDate'>Date</label>
              <input
                type='date'
                ref={(input)=>{_transactionDate=input;}}
              />
            </div>
            <div className='form-group'>
              <label for='vendor'>Vendor</label>
              <input
                type='text'
                ref={(input)=>{_vendor=input;}}
              />
            </div>
            <div className='form-group'>
              <label for='account'>Account</label>
              <select ref={(input) => {_account = input}} required>
                {Object.keys(this.state.accountList).map(accountId =>
                  <option value={accountId} key={accountId}>{this.state.accountList[accountId].name}</option>
                )}
              </select>
            </div>
            <div className='form-group'>
              <label for='category'>Category</label>
              <select ref={(input) => {_category = input}} required>
                <option value="groceries">Groceries</option>
                <option value="transportation">Transportation</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='type'>Type</label>
              <select ref={(input) => {_type = input}} required>
                <option value=""></option>
                <option value="true">Expense</option>
                <option value="false">Income</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='cleared'>Cleared?</label>
              <select ref={(input) => {_cleared = input}} required>
                <option value=""></option>
                <option value="Cleared">Yes</option>
                <option value="Uncleared">No</option>
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
  user: PropTypes.object
};

export default AddTransactionForm;
