import React from 'react';
import {Route} from 'react-router';
import styled from 'styled-components';
import TopPage from './pages/top';

const Wrapper = styled.div``;

export default () => {
  return <Wrapper>
    <Route path="/" exact component={TopPage}/>
  </Wrapper>;
};
