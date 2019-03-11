import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import './assets/styles/AccountItem.css';

function AccountItem({name, balance}){
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
    </div>
  )
}

AccountItem.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.string
}

export default AccountItem;
