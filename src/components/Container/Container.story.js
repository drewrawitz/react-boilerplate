import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Container from './Container';
import vars from '../../styles/vars'

storiesOf('Container', module)
  .add(
    'Overview',
    withInfo('This is our main layout container which is ' + vars.container + ' wide with ' + vars.mainPadding + ' left / right padding.')(() => {
      const story = (
        <Container>
          <p>This is text contained in our main container</p>
        </Container>
      );

      return story;
    })
  );
