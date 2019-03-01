import React from 'react';
import PropTypes from 'prop-types';

function Button({action, name}) {
  return (
    <button onClick={action}>{name}</button>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string
};

export default Button;