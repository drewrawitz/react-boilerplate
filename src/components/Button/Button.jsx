import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose'

const Button = onlyUpdateForKeys(['children', 'onClick', 'disabled'])(({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
})

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  disabled: false
}

export default Button;
