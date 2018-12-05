import React from 'react';
import styled from 'styled-components';
import {blackCharBold, whiteCharBold} from '../color';

export default ({level, inverse, children}) => {
  let Header;
  switch (level) {
    case 1:
      Header = styled.h1`
font-size: 2rem;
color: ${inverse ? whiteCharBold : blackCharBold};
`;
      break;
    case 2:
      Header = styled.h2`
font-size: 1.8rem;
color: ${inverse ? whiteCharBold : blackCharBold};
`;
      break;
    case 3:
      Header = styled.h3`
font-size: 1.4rem;
color: ${inverse ? whiteCharBold : blackCharBold};
`;
      break;
    default:
      Header = styled.div``;
  }

  return <Header>{children}</Header>;
};