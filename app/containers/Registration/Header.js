import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Heading>Agency Registration</Heading>
      <Div>
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Cencel</Button>
      </Div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 316px;
  height: 37px;
  margin: 32px 42px 16px 42px;
  justify-content: space-between;
  color: #354148;
`;
const Div = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;
const Heading = styled.h1`
  font-size: 30px;
  line-height: 37px;
  font-weight: 600;
`;

const Button = styled.button`
  background: #f7f8f8;
  border-radius: 20px;
  border: 0;
  color: #aabcc4;
  margin: 2%;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  font-size: 0.7em;
`;
