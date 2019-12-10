import React from 'react';
import styled from 'styled-components';
import './FooterSection.css';

export default function FooterSection() {
  const weekArray = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
  const weekS = weekArray.map(v => (
    <label key={Math.random()}>
      <input
        style={{ display: 'none' }}
        type="radio"
        value={v}
        name="medical_week_start"
      />{' '}
      <Day className="week-start" onClick={chooseDay}>
        {v}
      </Day>
    </label>
  ));
  const weekE = weekArray.map(v => (
    <label key={Math.random()}>
      <input
        style={{ display: 'none' }}
        type="radio"
        name="medical_week_end"
        value={v}
      />{' '}
      <Day className="week-end" onClick={chooseDay}>
        {v}
      </Day>
    </label>
  ));
  return (
    <Container>
      <H2>Medicare Week</H2>
      <Div>
        Click on the day that you Madicare week Begins and when it ends on days
        of the week below
      </Div>
      <RowL>
        <Row>
          <div>Starts</div>
          <RowL>{weekS}</RowL>
        </Row>
        <Row>
          <div>Ends</div>
          <RowL>{weekE}</RowL>
        </Row>
      </RowL>
    </Container>
  );
}

function chooseDay(e) {
  if (e.target.classList.contains('week-start')) {
    const starts = document.querySelectorAll('.week-start');
    for (let i = 0; i < starts.length; i += 1) {
      starts[i].classList.remove('active');
    }
    e.target.classList.add('active');
  } else if (e.target.classList.contains('week-end')) {
    const ends = document.querySelectorAll('.week-end');
    for (let i = 0; i < ends.length; i += 1) {
      ends[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
}

const Day = styled.div`
  border-radius: 100%;
  border: 1px solid #9ea5a9;
  color: #9ea5a9;
  font-size: 1.5em;
  min-width: 40px;
  height: 40px;
  text-align: center;
  padding: 2% 0;
  cursor: pointer;
  margin: 0 2px;
  user-select: none;
  &:hover {
    background: #324149;
    color: #f7f8f8;
  }
`;
const Container = styled.section`
  margin: 0 0 50px 42px;
  color: #303f47;
`;

const Div = styled.div`
  font-size: 0.9em;
  color: #303f47;
`;
const H2 = styled.h2`
  color: #303f47;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`;
const RowL = styled.div`
  display: flex;
  justify-content: space-between;
`;
