import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <Container>
      <InputHeader>{props.header}</InputHeader>
      <div>
        {props.select !== 'select' ? (
          <InputTag
            placeholder={props.placeholder ? props.placeholder : ''}
            type={props.type}
            name={props.name}
            style={{ width: props.width }}
          />
        ) : (
          <select
            name={props.name}
            style={{ width: props.width, height: '45px' }}
            id=""
          />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 25px 0 0;
`;
const InputHeader = styled.div`
  font-size: 0.9em;
  color: #aabcc4;
`;

const InputTag = styled.input`
  width: 160px;
  height: 45px;
  background: #f7f8f8;
  outline: none;
  border: 0;
  text-indent: 10%;
  border-radius: 7px;
  &::placeholder {
    color: #aabcc4;
  }
`;

Input.propTypes = {
  header: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
  select: PropTypes.string,
};
