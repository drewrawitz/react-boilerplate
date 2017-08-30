import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, boolean } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';
import Button from './Button';

storiesOf('Button', module)
  .add(
    'Overview',
    withInfo('This is a basic button component used throughout the application.')(() => {
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
          it('Should fire the click event', () => {
            const wrapper = mount(story);
            const onClick = expect.createSpy();
            wrapper.setProps({ onClick });
            wrapper.simulate('click');

            expect(onClick).toHaveBeenCalled();
            wrapper.unmount();
          });
        })
      );

      return story;
    })
  );
