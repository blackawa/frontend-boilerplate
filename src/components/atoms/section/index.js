import React from 'react';
import styled from 'styled-components';
import {whiteBackground} from '../color';

export default ({color, children}) => {
  const Section = styled.div`
background-color: ${color || whiteBackground};
padding: 1rem 5rem;
`;
  return <Section>{children}</Section>;
};