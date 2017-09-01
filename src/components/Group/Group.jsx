import React from 'react';
import PropTypes from 'prop-types';
import { StyledGroup } from './Group.styles.jsx';

const Group = (props) => {
  return (
    <StyledGroup {...props}>
      {props.children}
    </StyledGroup>
  )
};

Group.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'space_between', 'space_around']).isRequired,
  margin: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired
};

Group.defaultProps = {
  align: 'left',
  margin: 10
}

export default Group;

Group.displayName = 'Group';
