import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { StyledProgressBar, Progress } from './ProgressBar.styles.jsx';
import vars from '../../styles/vars';

const ProgressBar = onlyUpdateForKeys(['completed', 'color', 'showText'])(props => {
  let completed = props.completed;
  let completedText = null;

  if (completed < 0) {
    completed = 0
  }

  if (completed > 100) {
    completed = 100
  }

  if(props.showText) {
    completedText = completed + '%';
  }

  return (
    <StyledProgressBar>
      <Progress completed={completed} color={props.color} role="progressbar" aria-valuenow={completed} aria-valuemin="0" aria-valuemax="100" showText={props.showText}>
        {completedText}
      </Progress>
    </StyledProgressBar>
  );
});

ProgressBar.propTypes = {
  showText: PropTypes.bool,
  completed: PropTypes.number.isRequired,
  color: PropTypes.oneOf(Object.keys(vars.colors)).isRequired
};

ProgressBar.defaultProps = {
  showText: false,
  completed: 0,
  color: vars.primaryColor
};

export default ProgressBar;

ProgressBar.displayName = 'ProgressBar';
