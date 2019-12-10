import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

// PropTypes
const buttonStyles = { paddingLeft: 50 };
const AgenciesCard = ({
  agencyName,
  poc,
  activeVisits,
  contractors,
  action,
}) => (
  <ContianerView>
    <ItemView>{agencyName}</ItemView>
    <ItemView>{poc}</ItemView>
    <ItemView>{activeVisits}</ItemView>
    <ItemView>{contractors}</ItemView>
    <ItemView style={buttonStyles}>
      <ActionView>{action}</ActionView>
    </ItemView>
  </ContianerView>
);

const ContianerView = Styled.div`
width: 100%;
height: 48px;
background-color: #f2f2f2;
border-radius: 10px;
margin-top: 20px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
`;

const ItemView = Styled.div`
width: 20%;
text-align: center;
font-size: 10px;
color: #354148
`;

const ActionView = Styled.div`
height: 30px;
width: 50px;
text-align: center;
background-color: white;
border-radius: 15px;
font-size: 10px;
padding-top: 10px;
color: #354148
`;

AgenciesCard.propTypes = {
  agencyName: PropTypes.string,
  poc: PropTypes.string,
  activeVisits: PropTypes.number,
  contractors: PropTypes.number,
  action: PropTypes.string,
};

AgenciesCard.defaultProps = {
  agencyName: 'agencyName',
  poc: 'Dan Goldberg',
  activeVisits: 200,
  contractors: 40,
  action: 'Pause',
};
export default AgenciesCard;
