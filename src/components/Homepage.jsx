import React from 'react';
import CoinList from './CoinList';
import Pig from './assets/images/pig.png';
import PigBelly from './assets/images/pig-belly.png';
import './assets/styles/Homepage.css';

function Homepage(){ 
  
  return (
    <div>
      <CoinList/>
      <img src={Pig} className='piggy'/>
      <img src={PigBelly} className='piggy belly'/>
    </div>
  );
}

export default Homepage;