import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import App from '../containers/App';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/tech' component={App} />
    <Route path='/running' component={App} />
    <Route path='/random' component={App} />
    <Route path='/contact' component={App} />
  </Router>
);

export default Routes;
