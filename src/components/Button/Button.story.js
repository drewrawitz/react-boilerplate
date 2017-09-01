import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean, select } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import Button from './Button';
import vars from '../../styles/vars';

// Create an object of our site-wide colors in a format for our select dropdown
let colorList = {};

Object.keys(vars.colors).map((val) => {
  colorList[val] = vars.colors[val].name;
})

// Create the story
storiesOf('Button', module).add(
  'Overview',
  withInfo(
    'This is a basic button component used throughout the application.'
  )(() => {
    const story = (
      <Button
        disabled={boolean('Disabled', false)}
        full={boolean('Full Width', false)}
        filled={boolean('Filled', false)}
        onClick={action('clicked')}
        color={select(
          'Color',
          colorList,
          vars.primaryColor
        )}
        size={select(
          'Size',
          {
            small: 'Small',
            medium: 'Medium',
            large: 'Large'
          },
          'medium'
        )}
      >
        {text('Label', 'Hello Button')}
      </Button>
    );

    specs(() =>
      describe('Label', function() {
        it('Should have a label', function() {
          let output = mount(story);
          expect(output.text().length > 0).toBe(true);
        });
      })
    );

    return story;
  })
);
