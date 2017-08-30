import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs';
import { setDefaults } from '@storybook/addon-info';

setDefaults({
  header: false,
  inline: true
});

addDecorator((story) => (
  <div style={{ padding: '15px' }}>
    {story()}
  </div>
));

addDecorator(withKnobs);

addDecorator(
  backgrounds([
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'light-gray', value: '#ccc' },
    { name: 'dark-gray', value: '#999' }
  ])
);

const req = require.context('../src/components', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
