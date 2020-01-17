import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';
import './assets/styles/AccountItem.css';
import firebase from 'firebase';

function AccountItem({name, balance, id, user, selectAccount}){

  function handleRemoveAccount(){
    let account =  firebase.database().ref('Accounts/' + user.uid + '/' + id);
    account.remove();
  }

  function handleToggleUpdateForm(){
    selectAccount(id);
  }

  return(
    <div className='accountItem'>
      <h2 className='balance'>
        <NumberFormat
          value={balance}
          displayType={'text'}
          thousandSeparator={true}
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'$'} />
      </h2>
      <p className='name'>{name}</p>
      <div><img src={Trash} onClick={() => { handleRemoveAccount(); }} className='icon trashIcon accountIcon'/></div>
      <div><img onClick={() => { handleToggleUpdateForm(); }} src={Pen} className='icon penIcon accountIcon'/></div>
    </div>
  );
}

AccountItem.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.object,
  selectAccount: PropTypes.func
};

export default AccountItem;
