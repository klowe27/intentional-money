import React from 'react';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import './assets/styles/AccountList.css';


function AccountList({accounts, transactions, user}){

  function calculateCurrentBalance(accountId){
    let currentBalance = parseFloat(accounts[accountId].balance);
    Object.keys(transactions).map( transactionId => {
      let transaction = transactions[transactionId];
      if (accountId === transaction.account) {
        if (transaction.type === 'expense' && transaction.cleared === 'Cleared') {
          currentBalance -= parseFloat(transaction.amount);
        } else if (transaction.type === 'income' && transaction.cleared === 'Cleared')
          currentBalance += parseFloat(transaction.amount);
      }
    });
    return currentBalance;

  }

  if (Object.keys(accounts).length === 0){
    return(
      <div>You have no accounts.</div>
    )
  } else {
    return(
      <div className='accountList'>
        {Object.keys(accounts).map(accountId =>
          <AccountItem
            name={accounts[accountId].name}
            balance={calculateCurrentBalance(accountId)}
            id={accountId}
            user={user}
            key={accountId}
          />
        )}
      </div>
    )
  }
}

AccountList.propTypes = {
  accounts: PropTypes.object,
  transactions: PropTypes.object,
  user: PropTypes.object
}

export default AccountList;
