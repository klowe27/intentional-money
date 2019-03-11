import React from 'react';
import Bar from './Bar';
import {v4} from 'uuid';

function BarList() {

  function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
  }

  function generateBarList(){
    let barList = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let newLeft = 0;
    let newWidth = (window.innerWidth/20)-10;
    let newHeight = 10;
    let newDuration = 0;
    for (let i=0; i < 20; i++) {
      barList.push({width: newWidth, height: newHeight, left: newLeft, duration: newDuration});
      newHeight += randomNumber(0, height/10);
      newLeft += width/20;
      newDuration += 100;
    }
    return barList;
  }

  return (
    <div>
      {generateBarList().map((bar) =>
        <Bar
          width={bar.width}
          height={bar.height}
          left={bar.left}
          duration={bar.duration}
          key={v4()}/>
      )}
    </div>
  );
}

export default BarList;
