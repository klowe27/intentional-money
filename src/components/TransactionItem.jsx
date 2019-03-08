import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './assets/styles/TransactionItem.css';

function TransactionItem({date, vendor, amount, category, account, cleared}) {
  return(
    <div>
      <div className='transactionRow'>
        <div>{date}</div>
        <div>{vendor}</div>
        <div>{category}</div>
        <div>{account}</div>
        <NumberFormat
          value={parseInt(amount)}
          displayType={'text'}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'$'} />
        <div>{cleared}</div>
        <div><span className='edit'>e</span></div>
        <div className='delete'>x</div>
      </div>
      <hr/>
    </div>
  );
}

TransactionItem.propTypes = {
  date: PropTypes.string,
  vendor: PropTypes.string,
  amount: PropTypes.number,
  category: PropTypes.string,
  account: PropTypes.string,
  cleared: PropTypes.string
};

export default TransactionItem;
