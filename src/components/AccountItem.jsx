import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';
import './assets/styles/AccountItem.css';

function AccountItem({name, balance, id, user}){

  function handleRemoveAccount(id){
    let account =  firebase.database().ref('Accounts/' + user.uid + '/' + id);
    account.remove();
  }

  function handleUpdateAccount(id) {

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
      <div><img src={Trash} onClick={() => { handleRemoveAccount(id); }} className='icon trashIcon'/></div>
      <div onClick={() => { handleUpdateAccount(id); }}><img src={Pen} className='icon penIcon'/></div>
    </div>
  )
}

AccountItem.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.object
}

export default AccountItem;
