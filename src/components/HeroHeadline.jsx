import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/HeroHeadline.css';

function HeroHeadline(){

  return(
    <div className='hero'>
      <div className='headline'>Reach your financial goals.</div>
      <Link to='about'><button className='heroButton'>Start Now</button></Link>
    </div>
  );
}

export default HeroHeadline;
