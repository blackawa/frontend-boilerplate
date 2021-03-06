import { configure } from '@storybook/react';

// automatically import all  storybook.js files
const req = require.context('../src', true, /storybook.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
