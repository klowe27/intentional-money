import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h2>Would you like to go <Link to='/'>home</Link>?</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
