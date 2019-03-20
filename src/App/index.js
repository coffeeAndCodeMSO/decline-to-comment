import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import { HOME } from '../Constants';


const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={HOME} component={Home} />
    </div>
  </Router>
);

export default App;
