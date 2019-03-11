import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';
import './assets/styles/TransactionItem.css';
import Firebase from 'firebase';

function TransactionItem({date, vendor, amount, category, account, cleared, id, user}) {

  function handleRemoveTransaction(id){
    let category;
    let type;
    let amount;
    let account;
    let cleared;
    let transaction =  firebase.database().ref('Transactions/' + user.uid + '/' + id);
    transaction.on('value', (snap) => {
      category = snap.val().category ;
      type = snap.val().type ;
      amount = snap.val().amount ;
      account = snap.val().account ;
      cleared = snap.val().cleared ;
    });
    transaction.remove();
  }

  function handleUpdateTransaction(id){

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
        <div onClick={() => { handleUpdateTransaction(id); }}><img src={Pen} className='icon penIcon'/></div>
        <div onClick={() => { handleRemoveTransaction(id); }}><img src={Trash} className='icon trashIcon'/></div>
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
  user: PropTypes.object
};

export default TransactionItem;
