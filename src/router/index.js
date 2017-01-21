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
      <Route path='home' component={Home} />
      <Route path='tech' component={Tech} />
      <Route path='running' component={Running} />
      <Route path='random' component={Random} />
      <Route path='about' component={About} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
