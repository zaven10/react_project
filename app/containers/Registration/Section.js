import React from 'react';
import styled from 'styled-components';
import Input from 'containers/Registration/Input';
import PropTypes from 'prop-types';

export default function Section({ inputs, heading }) {
  const InputArray = [];
  inputs.forEach(v => {
    InputArray.push(
      <Row key={Math.random()}>
        {v.map(val => (
          <Input
            key={Math.random()}
            header={val.header}
            width={val.width ? val.width : ''}
            placeholder={val.placeholder ? val.placeholder : ''}
            type={val.type ? val.type : 'text'}
            name={val.name}
            select={val.header === 'State' ? 'select' : ''}
          />
        ))}
      </Row>,
    );
  });
  return (
    <Container>
      <H2>{heading}</H2>
      {InputArray}
    </Container>
  );
}

const Container = styled.section`
  margin: 0 0 50px 42px;
`;
const H2 = styled.h2`
  color: #303f47;
`;
const Row = styled.div`
  display: flex;
  margin: 20px 0;
`;

Section.propTypes = {
  inputs: PropTypes.array,
  heading: PropTypes.string,
};
