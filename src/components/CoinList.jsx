import React from 'react';
import Coin from './Coin';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function CoinList() {
  function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
  }

  function generateCoinList(){
    let coinList = [];
    let newDelay = 0
    const center = window.innerWidth/2;
    for (let i=0; i < 20; i++) {
      let newLeft = randomNumber(center-150, center+100);
      coinList.push({left: newLeft, delay: newDelay});
      newDelay += 160;
    }
    return coinList;
  }
  
  return (
    <div>
      {generateCoinList().map((coin) =>
        <Coin
          left={coin.left}
          delay={coin.delay}
          key={v4()}/>
      )}
    </div>
  );

}

export default CoinList;