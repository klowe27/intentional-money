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
    updateCategory(category, type, amount);
    updateAccount(account, type, amount, cleared);
    transaction.remove();
  }

  function updateCategory(category, type, amount) {
    console.log(category);
    let newName;
    let newBudget;
    let newActivity;
    let currentCategory = firebase.database().ref('Categories/' + user.uid + '/' + category);
    currentCategory.on('value', (snap) => {
      newName = snap.val().name;
      newBudget = snap.val().budget;
      newActivity = (type !== 'expense') ? (parseInt(snap.val().activity) - parseInt(amount)) : (parseInt(snap.val().activity) + parseInt(amount));
    });
    firebase.database().ref('Categories/' + user.uid + '/' + category).set({
      name: newName,
      budget: newBudget,
      activity: newActivity
    });
  }

  function updateAccount(account, type, amount, cleared) {
    console.log(account);
    if (cleared === 'Cleared') {
      let newName;
      let newBalance;
      let currentAccount = firebase.database().ref('Accounts/' + user.uid + '/' + account);
      currentAccount.on('value', (snap) => {
        newName = snap.val().name;
        newBalance = (type !== 'expense') ? (parseFloat(snap.val().balance) - parseFloat(amount)) : (parseFloat(snap.val().balance) + parseFloat(amount));
      });
      firebase.database().ref('Accounts/' + user.uid + '/' + account).set({
        name: newName,
        balance: newBalance
      });
    }
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
  amount: PropTypes.string,
  category: PropTypes.string,
  account: PropTypes.string,
  cleared: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.object
};

export default TransactionItem;
