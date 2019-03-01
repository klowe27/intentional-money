import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/MenuTab.css'

function MenuTab({showMenu, toggleMenu}) {
  if (!showMenu) {
    return(
      <div onClick={toggleMenu} className='menuTabBox'>
        <div className='menuTab tab1'></div>
        <div className='menuTab tab2'></div>
      </div>
    )
  } else {
    return(
      <div onClick={toggleMenu} className='menuTabBox'>
        <div className='menuTab tab1 x1'></div>
        <div className='menuTab tab2 x2'></div>
      </div>
    )
  }
}

MenuTab.propTypes = {
  showMenu: PropTypes.boolean,
  toggleMenu: PropTypes.func
}

export default MenuTab;