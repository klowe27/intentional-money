import React from 'react';
import Coin from './Coin';
import {v4} from 'uuid';

function CoinList() {
  function randomNumber(min, max) {
    return Math.floor(Math.random()*max+min);
  }

  function generateCoinList(){
    console.log(window.innerWidth);
    let coinList = [];
    let newDelay = 0
    const center = window.innerWidth/2;
    const fivePercent = window.innerWidth/20;
    for (let i=0; i < 5; i++) {
      let newLeft = center-30;
      coinList.push({left: newLeft, delay: newDelay});
      newDelay += 1;
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