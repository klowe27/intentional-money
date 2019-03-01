import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/AddTransactionForm.css';

let _transactionDate = null;
let _vendor = null;
let _transactionNote = null;
let _amount = null;

class AddTransactionForm extends React.Component {
  
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      category: null,
      account: null,
      expense: null,
      cleared: null
    }
    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
    this.selectType = this.selectType.bind(this);
    this.selectCleared = this.selectCleared.bind(this);

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
  
  selectCategory(e){
    this.setState({category: e.target.value});
  }
  
  selectAccount(e){
    this.setState({account: e.target.value});
  }
  
  selectType(e){
    this.setState({type: e.target.value});
  }
  
  selectCleared(e){
    this.setState({cleared: e.target.value});
  }
  
  render() {
    if (!this.props.showAddTransactionForm){
      return(
        null
      )
    } else {
      return (
        <div className='modal-background'> 
          <form onSubmit={this.handleAddTransaction} className='form'>
            <span className='close' onClick={this.props.toggleAddTransactionForm}>x</span>
            <h2>Add Transaction</h2>
            <label for='transactionDate'>Date</label>
            <input
              type='date'
              ref={(input)=>{_transactionDate=input;}}
            />
            <label for='vendor'>Vendor</label>
            <input
              type='text'
              placeholder='vendor'
              ref={(input)=>{_vendor=input;}}
            />
            <label for='account'>Account</label>
            <select onChange={this.selectAccount} required>
              <option value=""></option>
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
             </select>
            <label for='category'>Category</label>
            <select onChange={this.selectCategory} required>
              <option value=""></option>
              <option value="groceries">Groceries</option>
              <option value="transportation">Transportation</option>
              <option value="rent">Rent</option>
             </select>
            <label for='note'>Notes</label>
            <input
              type='text'
              placeholder='note'
              ref={(input)=>{_transactionNote=input;}}
            />
            <label for='amount'>Amount</label>
            <input
              type='number'
              placeholder='amount'
              ref={(input)=>{_amount=input;}}
            />
            <label for='type'>Transaction Type</label>
            <select onChange={this.selectType} required>
              <option value=""></option>
              <option value="true">Expense</option>
              <option value="false">Income</option>
             </select>
             <label for='cleared'>Cleared?</label>
             <select onChange={this.selectCleared} required>
               <option value=""></option>
               <option value="true">Yes</option>
               <option value="false">No</option>
              </select>
            <button type='submit'>Add</button>
          </form>
        </div>
      );
    }
  }
}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.boolean,
  addTransaction: PropTypes.func,
  toggleAddTransactionForm: PropTypes.func
}

export default AddTransactionForm;