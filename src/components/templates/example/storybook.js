import React from 'react';
import {storiesOf} from '@storybook/react';
import ExampleTemplate from './index';

storiesOf('templates/example', module)
  .add('default', () => <ExampleTemplate/>);