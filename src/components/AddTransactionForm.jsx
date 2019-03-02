import React from 'react';
import PropTypes from 'prop-types';

let _transactionDate = null;
let _vendor = null;
let _transactionNote = null;
let _amount = null;

class AddTransactionForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      category: null,
      account: null,
      type: null,
      cleared: null
    };
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleSelectAccount = this.handleSelectAccount.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);
    this.handleSelectCleared = this.handleSelectCleared.bind(this);
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
  }
  
  handleAddTransaction(e) {
    e.preventDefault();
    console.log(_transactionDate.value);
    console.log(_vendor.value);
    console.log(_transactionNote.value);
    console.log(_amount.value);
    console.log(this.state.category);
    console.log(this.state.account);
    console.log(this.state.type);
    console.log(this.state.cleared);
    this.props.toggleAddTransactionForm();
  }
  
  handleSelectCategory(e){
    this.setState({category: e.target.value});
  }
  
  handleSelectAccount(e){
    this.setState({account: e.target.value});
  }
  
  handleSelectType(e){
    this.setState({type: e.target.value});
  }
  
  handleSelectCleared(e){
    this.setState({cleared: e.target.value});
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
                placeholder='amount'
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
                placeholder='vendor'
                ref={(input)=>{_vendor=input;}}
              />
            </div>
            <div className='form-group'>
              <label for='account'>Account</label>
              <select onChange={this.handleSelectAccount} required>
                <option value=""></option>
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='category'>Category</label>
              <select onChange={this.handleSelectCategory} required>
                <option value=""></option>
                <option value="groceries">Groceries</option>
                <option value="transportation">Transportation</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='note'>Notes</label>
              <input
                type='text'
                placeholder='note'
                ref={(input)=>{_transactionNote=input;}}
              />
            </div>
            <div className='form-group'>
              <label for='type'>Transaction Type</label>
              <select onChange={this.handleSelectType} required>
                <option value=""></option>
                <option value="true">Expense</option>
                <option value="false">Income</option>
              </select>
            </div>
            <div className='form-group'>
              <label for='cleared'>Cleared?</label>
              <select onChange={this.handleSelectCleared} required>
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
  toggleAddTransactionForm: PropTypes.func
};

export default AddTransactionForm;