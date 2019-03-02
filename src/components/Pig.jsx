import React from 'react';
import PigBank from './assets/images/pig.png';
import PigBelly from './assets/images/pig-belly.png';
import PropTypes from 'prop-types';
import './assets/styles/Pig.css';

function Pig(){ 
  
  return (
    <div>
      <img src={PigBank} className='piggy'/>
      <img src={PigBelly} className='piggy belly'/>
    </div>
  );
}

export default Pig;