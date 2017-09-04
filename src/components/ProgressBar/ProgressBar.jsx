import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { StyledProgressBar, Progress } from './ProgressBar.styles.jsx';
import vars from '../../styles/vars';

const ProgressBar = onlyUpdateForKeys(['completed', 'color'])(props => {
  let completed = props.completed;
  if (completed < 0) {
    completed = 0
  }

  if (completed > 100) {
    completed = 100
  }

  return (
    <StyledProgressBar>
      <Progress completed={completed} color={props.color} role="progressbar" aria-valuenow={completed} aria-valuemin="0" aria-valuemax="100">
        {completed}%
      </Progress>
    </StyledProgressBar>
  );
});

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  color: PropTypes.oneOf(Object.keys(vars.colors)).isRequired
};

ProgressBar.defaultProps = {
  color: vars.primaryColor,
  completed: 0
};

export default ProgressBar;

ProgressBar.displayName = 'ProgressBar';
