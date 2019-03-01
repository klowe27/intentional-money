import React from 'react';
import PropTypes from 'prop-types';

function AddTransactionForm({showAddTransactionForm, addTransaction}) {
  
  let _test = null;
  
  function handleAddTransaction(event){
    event.preventDefault();
    console.log(_test.value);
    addTransaction();
  }
  
  if (!showAddTransactionForm){
    return(
      null
    )
  } else {
    return (
      <div> 
        <form onSubmit={handleAddTransaction}>
          <input
            type='text'
            placeholder='test'
            ref={(input)=>{_test=input;}}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.boolean,
  addTransaction: PropTypes.func
}

export default AddTransactionForm;