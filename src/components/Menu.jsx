import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './assets/styles/Menu.css';


function Menu({showMenu}) {
  if (!showMenu) {
    return (
      null
    )
  } else {
    return (
      <div className='menu'>
        <div className='menu-top'></div>
        <Link to='/budget'><div className='menu-item'>Budget</div></Link>
        <Link to='/accounts'><div className='menu-item'>Accounts</div></Link>
      </div>
    )
  }  
}

Menu.propTypes = {
  showMenu: PropTypes.boolean
}

export default Menu;