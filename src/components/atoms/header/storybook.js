import React from 'react';
import {storiesOf} from '@storybook/react';
import Header from './index';
import Section from '../../atoms/section';
import {blackBackground} from '../color';

storiesOf('atoms/header', module)
  .add('default', () => {
    return <div>
      <Section>
        <Header level={1}>Header level 1</Header>
        <Header level={2}>Header level 2</Header>
        <Header level={3}>Header level 3</Header>
      </Section>
      <Section color={blackBackground}>
        <Header level={1} inverse>Header level 1</Header>
        <Header level={2} inverse>Header level 2</Header>
        <Header level={3} inverse>Header level 3</Header>
      </Section>
    </div>;
  });
