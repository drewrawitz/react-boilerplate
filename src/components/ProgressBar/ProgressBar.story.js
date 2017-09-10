import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { number, select, boolean } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';
import vars from '../../styles/vars';

// Create an object of our site-wide colors in a format for our select dropdown
let colorList = {};

Object.keys(vars.colors).map((val) => {
  colorList[val] = vars.colors[val].name;
});

storiesOf('ProgressBar', module)
  .add(
    'Overview',
    withInfo('')(() => {
      const story = (
        <ProgressBar
          completed={number('Completed', 35)}
          color={select(
            'Color',
            colorList,
            vars.primaryColor
          )}
          showText={boolean('Show Text', false)}
        />
      );

      return story;
    })
  );
