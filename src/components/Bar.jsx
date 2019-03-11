import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/Bar.css';

function Bar({width, height, left, duration}) {
  return(
    <div className='bar'>
      <style jsx>{`
        div {
          width: ${width}px;
          height: ${height}px;
          left: ${left}px;
          animation-duration: ${duration}ms;
        }
      `}</style>
    </div>
  );
}

Bar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  left: PropTypes.number,
  duration: PropTypes.number
};

export default Bar;
