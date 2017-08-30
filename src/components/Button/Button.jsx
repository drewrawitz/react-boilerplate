import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;
