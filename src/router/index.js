import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import Tech from '../containers/Tech';
import Running from '../containers/Running';
import Random from '../containers/Random';
import About from '../containers/About';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={About} />
      <Route path='tech' component={About} />
      <Route path='running' component={About} />
      <Route path='random' component={About} />
      <Route path='about' component={About} />
      <IndexRoute component={About} />
    </Route>
  </Router>
);

export default Routes;
