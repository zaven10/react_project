import React from 'react';
import styled from 'styled-components';

export default function Button() {
  return <ButtonTag type="submit">Register</ButtonTag>;
}

const ButtonTag = styled.button`
  margin: 0 0 0 42px ;
  background: #324149;
  display: block;
  font-size: 1.2em;
  padding 2%;
  width: 90%;
  border: 0;
  outline: none;
  border-radius: 100px;
  font-weight: 600;
  color: #f7f8f8;
  cursor: pointer;
`;
