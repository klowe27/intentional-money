import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/AddTransactionForm.css';

function AddTransactionForm({showAddTransactionForm, addTransaction, toggleAddTransactionForm}) {
  
  let _date = null;
  let _vendor = null;
  let _category = null;
  let _account = null;
  let _note = null;
  let _ampount = null;
  let _cleared = null;
  let _expense = null;
  
  function handleAddTransaction(event){
    event.preventDefault();
    console.log(_test.value);
    addTransaction();
  }
  
  function closeAddTransactionFormModal(){
    toggleAddTransactionForm();
  }
    
  if (!showAddTransactionForm){
    return(
      null
    )
  } else {
    return (
      <div className='modal-background'> 
      <button onClick={toggleAddTransactionForm}>CLOSE</button>
        <form onSubmit={handleAddTransaction} className='form'>
          <h2>Add Transaction</h2>
          <label for='date'>Date</label>
          <input
            type='date'
            ref={(input)=>{_date=input;}}
          />
          <label for='vendor'>Vendor</label>
          <input
            type='text'
            placeholder='vendor'
            ref={(input)=>{_vendor=input;}}
          />
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
            ref={(input)=>{_note=input;}}
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
    )
  }
}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.boolean,
  addTransaction: PropTypes.func,
  toggleAddTransactionForm: PropTypes.func
}

export default AddTransactionForm;