import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../Navigation';
import Home from '../Home';
import Footer from '../Components/Footer'

import { home } from '../Constants';

const App = () => (
  <Router>
    <AppDivS>
      <ContentDivS>
        <div className="App-header">
          <Navigation />
        </div>
        <hr />
        <div className="main">
          <Route exact path={home.path} component={Home} />
        </div> 
      </ContentDivS>
      <Footer />
    </AppDivS>
  </Router>
);

const AppDivS = styled.div`
  --space: 1.5em 0;
  --space: 2em 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentDivS = styled.div`
  flex: 1 0 auto;
  padding: var(--space) var(--space) 0;
  width: 100%;
  &:after {
    content: '\00a0';
    display: block;
    margin-top: var(--space);
    height: 0;
    visibility: hidden;
  }
`

export default App;
