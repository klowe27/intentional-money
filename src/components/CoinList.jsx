import React from 'react';
import Coin from './Coin';
import {v4} from 'uuid';

function CoinList() {
  function randomNumber(min, max) {
    return Math.floor(Math.random()*max+min);
  }

  function generateCoinList(){
    let coinList = [];
    const center = window.innerWidth/2;
    for (let i=0; i < 10; i++) {
      let newLeft = center;
      let newDelay = i;
      coinList.push({left: newLeft, delay: newDelay});
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