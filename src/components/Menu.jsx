import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './assets/styles/Menu.css';


function Menu({showMenu, toggleMenu}) {
  if (!showMenu) {
    return (
      null
    );
  } else {
    return (
      <div className='menu' onClick={toggleMenu}>
        <div className='menu-top'></div>
        <Link to='/'><div className='menu-item'>Home</div></Link>
        <Link to='/budget'><div className='menu-item'>Budget</div></Link>
        <Link to='/accounts'><div className='menu-item'>Accounts</div></Link>
      </div>
    );
  }  
}

Menu.propTypes = {
  showMenu: PropTypes.boolean,
  toggleMenu: PropTypes.func
};

export default Menu;