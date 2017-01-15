import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import App from '../containers/App';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
  </Router>
);

export default Routes;
