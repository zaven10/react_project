import React from 'react';
import styled from 'styled-components';

export default function AsideHeader() {
  return (
    <div>
      <H1>Visitry</H1>
      <P>Agency Registration</P>
    </div>
  );
}

const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 0.32em;
`;
const P = styled.p`
  font-size: 0.8em;
  margin: 0;
`;
