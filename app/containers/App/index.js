/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import DayIcon from 'components/DayIcon';
import AgenciesCard from 'components/AgenciesCard';
import ViewAllButton from 'components/ViewAllButton';
import Registration from 'containers/Registration';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      {/* <Helmet */}
      {/* titleTemplate="%s - React.js Boilerplate" */}
      {/* defaultTitle="React.js Boilerplate" */}
      {/* > */}
      {/* <meta name="description" content="A React.js Boilerplate application" /> */}
      {/* </Helmet> */}
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/dayIcon" component={DayIcon} />
        <Route path="/agenciesCard" component={AgenciesCard} />
        <Route path="/viewAllButton" component={ViewAllButton} />
        <Route path="/registration" component={Registration} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      {/* <GlobalStyle /> */}
    </AppWrapper>
  );
}
