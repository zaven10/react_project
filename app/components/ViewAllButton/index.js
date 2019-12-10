import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

// PropTypes
const ViewAllButton = ({ title, onClick, btnColor }) => (
  <ContianerView onClick={onClick} btnColor={btnColor}>
    {title}
  </ContianerView>
);

const ContianerView = Styled.div`
width: 80px;
background-color: ${props => (props.btnColor ? props.btnColor : 'gray')};
height: 40px;
border-radius: 20px;
margin-top: 20px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
color: white
`;

ViewAllButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  btnColor: PropTypes.string,
};

ViewAllButton.defaultProps = {
  title: 'Open',
  onClick: () => null,
  btnColor: '#333333',
};
export default ViewAllButton;
