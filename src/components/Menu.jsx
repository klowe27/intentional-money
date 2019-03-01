import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/Header.css';


function Menu() {
  
  return(
    <div className='menu'>
      <div className='menu-top'></div>
      <Link to='/budget'><div className='menu-item'>Budget</div></Link>
      <Link to='/accounts'><div className='menu-item'>Accounts</div></Link>
    </div>
  )
}

export default Menu;