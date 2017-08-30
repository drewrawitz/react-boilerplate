import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, disabled, onClick } = this.props;

    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false
}

export default Button;
