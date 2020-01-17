import React from 'react';
import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import './assets/styles/TransactionItem.css';

function TransactionList({user, transactions, selectTransaction}) {

  function getAccountNameByKey(key){
    let accountName;
    let account =  firebase.database().ref('Accounts/' + user.uid + '/' + key);
    account.on('value', (snap) => {
      (snap.val() !== null) ? accountName = snap.val().name : accountName = 'Deleted';
    });
    return accountName;
  }

  function getCategoryNameByKey(key){
    let categoryName;
    let category =  firebase.database().ref('Categories/' + user.uid + '/' + key);
    category.on('value', (snap) => {
      (snap.val() !== null) ? categoryName = snap.val().name : categoryName = 'Deleted';
    });
    return categoryName;
  }

  if (Object.keys(transactions).length === 0){
    return(
      <div>You have no transactions.</div>
    );
  } else {
    return(
      <div>
        <div className='transactionRow headerRow'>
          <div>Date</div>
          <div>Vendor</div>
          <div>Category</div>
          <div>Account</div>
          <div>Amount</div>
          <div>Cleared</div>
          <div></div>
          <div></div>
        </div>
        {Object.keys(transactions).map(transactiontId =>
          <TransactionItem
            date={transactions[transactiontId].transactionDate}
            vendor={transactions[transactiontId].vendor}
            amount={transactions[transactiontId].amount}
            category={getCategoryNameByKey(transactions[transactiontId].category)}
            account={getAccountNameByKey(transactions[transactiontId].account)}
            cleared={transactions[transactiontId].cleared}
            key={transactiontId}
            id={transactiontId}
            selectTransaction={selectTransaction}
            user={user}/>
        )}
      </div>
    );
  }
}

TransactionList.propTypes = {
  user: PropTypes.object,
  transactions: PropTypes.object,
  selectTransaction: PropTypes.func
};

export default TransactionList;
