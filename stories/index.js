import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { Welcome } from '@storybook/react/demo';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';
import backgrounds from '@storybook/addon-backgrounds';
import Button from '../src/components/Button/Button';
import { mount } from 'enzyme';
import expect from 'expect';

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    backgrounds([
      { name: 'white', value: '#fff', default: true },
      { name: 'black', value: '#000' },
      { name: 'light-gray', value: '#ccc' },
      { name: 'dark-gray', value: '#999' }
    ])
  )
  .add(
    'Overview',
    withInfo({
      inline: true,
      header: false
    })(() => {
      const story = (
        <Button
          disabled={boolean('Disabled', false)}
          onClick={action('clicked')}
        >
          {text('Label', 'Hello Button')}
        </Button>
      );

      specs(() =>
        describe('Hello Button', function() {
          it('Should have the Hello Button label', function() {
            let output = mount(story);
            expect(output.text()).toContain('Hello Button');
          });
        })
      );

      return story;
    })
  );
