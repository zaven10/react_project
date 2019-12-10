import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

// PropTypes

const DayIcon = ({
  title,
  borderColor,
  textColor,
  backgroundColor,
  height,
  width,
  topText,
  lowerText,
  topTextColor,
  lowerTextColor,
}) => (
  <ContianerView>
    <UpperText topTextColor={topTextColor}>{topText}</UpperText>
    <RoundView
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
    >
      <Title textColor={textColor}>{title}</Title>
    </RoundView>
    <LowerText lowerTextColor={lowerTextColor}>{lowerText}</LowerText>
  </ContianerView>
);

const ContianerView = Styled.div`
margin-top: 5px`;
const UpperText = Styled.span`
${props => (props.topTextColor ? props.topTextColor : 'red')}
`;
const LowerText = Styled.span`
${props => (props.lowerTextColor ? props.lowerTextColor : 'red')}

`;

const RoundView = Styled.div`
height: ${props => (props.height ? props.height : '40px')};
width: ${props => (props.width ? props.width : '40px')};
border-radius: 20px;
background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#000000'};
justify-content: center;
align-items: center;
text-align: center;
padding-top: 10px;
border: 2px solid ${props => (props.borderColor ? props.borderColor : 'red')}

`;
const Title = Styled.div`
color: ${props => (props.borderColor ? props.borderColor : 'white')}
`;

DayIcon.propTypes = {
  title: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  lowerText: PropTypes.string,
  topText: PropTypes.string,
  lowerTextColor: PropTypes.string,
  topTextColor: PropTypes.string,
};

DayIcon.defaultProps = {
  title: 'Su',
  borderColor: '#000000',
  textColor: 'white',
  backgroundColor: '#000000',
  height: '40px',
  width: '40px',
  lowerText: '',
  topText: '',
  lowerTextColor: '#000000',
  topTextColor: '#000000',
};
export default DayIcon;
