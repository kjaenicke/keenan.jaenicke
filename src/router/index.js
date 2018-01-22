import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <Route path='about' component={About} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
