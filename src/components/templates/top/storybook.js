import React from 'react';
import {storiesOf} from '@storybook/react';
import TopTemplate from './index';

storiesOf('templates/top', module)
  .add('default', () => <TopTemplate/>);