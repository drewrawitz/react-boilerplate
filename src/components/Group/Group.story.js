import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, number } from '@storybook/addon-knobs';
import Group from './Group';
import Button from '../Button/Button.jsx';

storiesOf('Group', module)
  .add(
    'Grouping Buttons',
    withInfo('')(() => {
      const story = (
        <Group
          align={select(
            'Align',
            {
              left: 'Left',
              center: 'Center',
              right: 'Right',
              space_between: 'Space Between',
              space_around: 'Space Around'
            },
            'left'
          )}
          margin={number('Margin', 5)}
        >
          <Button color="blue">Submit</Button>
          <Button color="red" filled>Delete</Button>
        </Group>
      );

      return story;
    })
  );
