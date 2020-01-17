import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';
import './assets/styles/TransactionItem.css';
import firebase from 'firebase';

function TransactionItem({date, vendor, amount, category, account, cleared, id, user, selectTransaction}) {

  function handleRemoveTransaction(){
    let transaction =  firebase.database().ref('Transactions/' + user.uid + '/' + id);
    transaction.remove();
  }

  function handleUpdateTransaction(){
    selectTransaction(id);
  }

  return(
    <div>
      <div className='transactionRow'>
        <div>{date}</div>
        <div>{vendor}</div>
        <div>{category}</div>
        <div>{account}</div>
        <NumberFormat
          value={parseFloat(amount)}
          displayType={'text'}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'$'} />
        <div>{(cleared === 'Cleared') ? <div className='status cleared'>C</div> : <div className='status uncleared'>C</div>}</div>
        <div><img src={Pen} className='icon penIcon' onClick={() => { handleUpdateTransaction(); }}/></div>
        <div><img src={Trash} className='icon trashIcon' onClick={() => { handleRemoveTransaction(); }}/></div>
      </div>
      <hr/>
    </div>
  );
}

TransactionItem.propTypes = {
  date: PropTypes.string,
  vendor: PropTypes.string,
  amount: PropTypes.string,
  category: PropTypes.string,
  account: PropTypes.string,
  cleared: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.object,
  selectTransaction: PropTypes.func
};

export default TransactionItem;
