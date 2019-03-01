import React from 'react';
import PropTypes from 'prop-types';

function AddTransactionForm({showAddTransactionForm}) {
  if (!showAddTransactionForm){
    return(
      null
    )
  } else {
    return (
      <div>Add Transaction Form</div>
    )
  }
}

AddTransactionForm.propTypes = {
  showAddTransactionForm: PropTypes.boolean
}

export default AddTransactionForm;