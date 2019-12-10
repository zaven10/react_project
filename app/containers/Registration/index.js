import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AsideHeader from 'containers/Registration/AsideHeader';
import Header from 'containers/Registration/Header';
import Section from 'containers/Registration/Section';
import FooterSection from 'containers/Registration/FooterSection';
import Button from 'containers/Registration/Button';
const general = [
  [
    { header: 'Agency Name', name: 'name' },
    { header: 'Agency Phone', name: 'phone' },
  ],
  [
    { header: 'Street Address', name: 'street_address' },
    { header: 'Apt N', width: '70px', name: 'suite_number' },
    { header: 'City', width: '100px', name: 'city' },
    { header: 'State', width: '70px', name: 'state' },
    { header: 'Zip', width: '70px', name: 'zip' },
  ],
];
const createPassword = [
  [
    { header: 'Type Password', name: 'password', type: 'password' },
    { header: 'Re-type Password', name: 'repeat_password', type: 'password' },
  ],
];
const primaryContact = [
  [
    { header: 'Name', placeholder: 'First & Last Name', name: 'contact_name' },
    { header: 'Email', name: 'contact_email' },
    { header: 'Phone', name: 'contact_phone' },
    { header: 'Ext', name: 'contact_ext', width: '70px' },
  ],
];
const directorContact = [
  [
    { header: 'Name', placeholder: 'First & Last Name', name: 'director_name' },
    { header: 'Email', name: 'director_email' },
    { header: 'Phone', name: 'director_phone' },
    { header: 'Ext', name: 'director_ext', width: '70px' },
  ],
];
const financialInfo = [
  [
    { header: 'Routing #', name: 'bank_routing_number' },
    { header: 'Account #', name: 'bank_account_number' },
    { header: 'ein #', name: 'bank_ein_number' },
  ],
];
const licences = [
  [
    { header: 'CMS Certification #', name: 'cms_certification_number' },
    {
      header: 'Expiration Date',
      name: 'cms_certification_expired_at',
      type: 'date',
    },
  ],
  [
    {
      header: 'State Business License/Sunbiz #',
      name: 'business_license_number',
    },
    {
      header: 'Expiration Date',
      name: 'business_license_expired_at',
      type: 'date',
    },
  ],
  [
    { header: 'AHCA #', name: 'ahca_number' },
    { header: 'Expiration Date', name: 'ahca_expired_at', type: 'date' },
  ],
];
const defaultRates = [
  [
    {
      header: 'Visit (PT)',
      name: 'default_visit_rate',
      width: '70px',
      placeholder: '$',
    },
    { header: 'DC', name: 'default_dc_rate', width: '70px', placeholder: '$' },
    {
      header: 'Eval',
      name: 'default_eval_rate',
      width: '70px',
      placeholder: '$',
    },
    {
      header: 'Oasis SOC',
      name: 'default_oasis_soc_rate',
      width: '70px',
      placeholder: '$',
    },
    {
      header: 'Oasis DOC',
      name: 'default_oasis_doc_rate',
      width: '70px',
      placeholder: '$',
    },
    {
      header: 'Visit (PTA)',
      name: 'default_visit_pta_rate',
      width: '70px',
      placeholder: '$',
    },
    {
      header: 'Re-eval',
      name: 'default_reeval_rate',
      width: '70px',
      placeholder: '$',
    },
  ],
  [
    {
      header: 'Oasis DC',
      width: '70px',
      name: 'default_oasis_dc_rate',
      placeholder: '$',
    },
    {
      header: 'Oasis Re-cert',
      width: '70px',
      name: 'default_oasis_rechart_rate',
      placeholder: '$',
    },
  ],
];
export default function Registration() {
  return (
    <Container>
      <Aside>
        <AsideHeader />
      </Aside>
      <Main>
        <Header />
        <Line />
        <Row>
          <form onSubmit={registration}>
            <Section inputs={general} heading="General Info" />
            <Section inputs={createPassword} heading="Create Password" />
            <Section inputs={primaryContact} heading="Primary Contact" />
            <Section
              inputs={directorContact}
              heading="Director of Clinical Services"
            />
            <Section inputs={licences} heading="Licences and Certifications" />
            <Section inputs={financialInfo} heading="Financial Info" />
            <Section inputs={defaultRates} heading="Default Rates" />
            <FooterSection />
            <Button />
          </form>
        </Row>
      </Main>
    </Container>
  );
}

function registration(e) {
  e.preventDefault();
  const dataF = new FormData(e.currentTarget);
  axios({
    url: 'localhost:4000/api/agencies',
    method: 'post',
    data: dataF,
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then(({ data }) => {
  });
}
const Container = styled.div`
  background: #00b794;
  display: flex;
  height: 100vh;
`;

const Aside = styled.aside`
  background: transparent;
  color: white;
  font-family: Montserrat;
  text-align: center;
  padding-left: 3%;
  padding-right: 2.5%;
  min-width: 160px;
`;
const Main = styled.main`
  background: white;
  border-radius: 40px 0 0 40px;
  flex-grow: 10;
  padding-bottom: 70px;
`;

const Line = styled.div`
  box-sizing: border-box;
  height: 1px;
  border: 1px solid #eef0f1;
  margin: 0 42px;
`;
const Row = styled.div`
  height: 95%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;
