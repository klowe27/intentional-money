import React from 'react';
import PropTypes from 'prop-types';

function Button({action, className, name}) {
  return (
    <button onClick={action} className={className}>{name}</button>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string
};

export default Button;