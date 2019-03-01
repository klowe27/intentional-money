import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/TransactionItem.css'

function TransactionItem({date, vendor, note, amount, category, account, cleared}) {
  return(
    <div>
      <div className='transactionRow'>
        <div>{date}</div>
        <div>{vendor}</div>
        <div>{note}</div>
        <div>{category}</div>
        <div>{account}</div>
        <div>{amount}</div>
        <div>{cleared}</div>
      </div>
      <hr/>
    </div>
  )
}

TransactionItem.propTypes = {
  date: PropTypes.string,
  vendor: PropTypes.string,
  note: PropTypes.string,
  amount: PropTypes.number,
  category: PropTypes.string,
  account: PropTypes.string,
  cleared: PropTypes.boolean
};

export default TransactionItem;