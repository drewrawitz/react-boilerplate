import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import { StyledButton } from './Button.styles.jsx'

const Button = onlyUpdateForKeys(['children', 'onClick', 'disabled'])((props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
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

Button.displayName = 'Button';
