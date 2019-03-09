import React from 'react';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import './assets/styles/AccountList.css';


function AccountList({accounts}){
  return(
    <div className='accountList'>
      {Object.keys(accounts).map(accountId =>
        <AccountItem
          name={accounts[accountId].name}
          balance={accounts[accountId].balance}
          key={accountId}
        />
      )}
    </div>
  )
}

AccountList.propTypes = {
  accounts: PropTypes.object
}

export default AccountList;
