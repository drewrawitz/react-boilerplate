import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { StyledButton } from './Button.styles.jsx';
import vars from '../../styles/vars';

const Button = onlyUpdateForKeys(['children', 'onClick', 'disabled'])(props => {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
});

Button.propTypes = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  color: PropTypes.oneOf(Object.keys(vars.colors)).isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false,
  full: false,
  color: 'gray',
  size: 'medium'
};

export default Button;

Button.displayName = 'Button';
