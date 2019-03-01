import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/AddTransactionForm.css';

class AddTransactionForm extends React.Component {
  
  constructor({showAddTransactionForm, addTransaction, toggleAddTransactionForm}){
    super(props);
    console.log(props);
    this.state = {
      category: null,
      account: null,
      type: null
    }
    let _transactionDate = null;
    let _vendor = null;
    let _transactionNote = null;
    let _amount = null;
    let _cleared = null;
  }
  
  handleAddTransaction(e){
    e.preventDefault();
    console.log(_date.value);
    addTransaction();
  }
  
  selectCategory(e){
    this.setState({category: e.target.value})
  }
  
  selectAccount(e){
    this.setState({account: e.target.value})
  }
  
  selectType(e){
    this.setState({type: e.target.value})
  }
  
  render() {
    if (!showAddTransactionForm){
      return(
        null
      )
    } else {
      return (
        <div className='modal-background'> 
          <form onSubmit={this.handleAddTransaction} className='form'>
            <span className='close' onClick={toggleAddTransactionForm}>x</span>
            <h2>Add Transaction</h2>
            <label for='date'>Date</label>
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
            <label for='category'>Category</label>
            <select onChange={this.selectCategory} required>
              <option value = "">None</option>
              <option value = "1">1</option>
              <option value = "2">2</option>
              <option value = "3">3</option>
             </select>
            <label for='category'>Category</label>
            <input
              type='text'
              placeholder='category'
              ref={(input)=>{_category=input;}}
            />
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