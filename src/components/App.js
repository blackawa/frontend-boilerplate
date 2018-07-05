import React from 'react';
import {Route} from 'react-router';
import styled from 'styled-components';
import ExamplePage from './pages/example';

const Wrapper = styled.div``;

export default () => {
  return <Wrapper>
    <Route path="/" exact component={ExamplePage}/>
  </Wrapper>;
};
