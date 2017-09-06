import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { StyledButton, StyledLink } from './Button.styles.jsx';
import vars from '../../styles/vars';

const Button = onlyUpdateForKeys(['children', 'onClick', 'href', 'disabled'])(props => {
  const ButtonWrapper = props.href ? StyledLink : StyledButton;

  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
});

Button.propTypes = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  filled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  color: PropTypes.oneOf(Object.keys(vars.colors)).isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  full: false,
  filled: false,
  color: vars.primaryColor,
  size: 'medium'
};

export default Button;

Button.displayName = 'Button';
