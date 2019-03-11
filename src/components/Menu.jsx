import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './assets/styles/Menu.css';


function Menu({showMenu, toggleMenu, user, login, logout}) {
  if (!showMenu) {
    return (
      null
    );
  } else {
    return (
      <div className='menu' onClick={toggleMenu}>
        <div className='menu-top'></div>
        {user ? <img src={user.photoURL} className='userPhoto'/> : null}
        <Link to='/'><div className='menu-item'>Home</div></Link>
        <Link to='/budget'><div className='menu-item'>Budget</div></Link>
        <Link to='/accounts'><div className='menu-item'>Accounts</div></Link>
        {user ? <div className='menu-item' onClick={logout}>Log Out</div> : <div className='menu-item' onClick={login}>Log In</div>}
      </div>
    );
  }
}

Menu.propTypes = {
  showMenu: PropTypes.bool,
  toggleMenu: PropTypes.func,
  user: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func
};

export default Menu;
