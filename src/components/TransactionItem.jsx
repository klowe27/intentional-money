import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';
import './assets/styles/TransactionItem.css';
import Firebase from 'firebase';

function TransactionItem({date, vendor, amount, category, account, cleared, id, user}) {

  function handleRemoveTransaction(id){
    let transaction =  firebase.database().ref('Transactions/' + user.uid + '/' + id);
    transaction.remove();
  }

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
        <div>{(cleared === 'Cleared') ? <div className='status cleared'>C</div> : <div className='status uncleared'>C</div>}</div>
        <div><img src={Pen} className='icon penIcon'/></div>
        <div onClick={() => { handleRemoveTransaction(id); }}><img src={Trash} className='icon trashIcon'/></div>
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
  cleared: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.object
};

export default TransactionItem;
