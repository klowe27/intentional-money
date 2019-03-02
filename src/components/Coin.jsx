import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/Coin.css';

function Coin({left, delay}) {
  return(
    <div className='coin'>
      <style jsx>{`
        div {
          left: ${left}px;
          animation-delay: ${delay}ms;
        }
      `}</style>$
    </div>
  );
}

Coin.propTypes = {
  left: PropTypes.number,
  delay: PropTypes.number
};

export default Coin;