import React from 'react';
import Header from '../components/Header';
import injectSheet from 'react-jss';

const classes = {
  app: {},
  content: {
    backgroundColor: 'white'
  }
};

const App = ({ sheet: {classes}, children }) => (
  <div className="app">
    <Header />
    <div className={classes.content}>
      {children}
    </div>
    {/* Footer */}
  </div>
);

export default injectSheet(classes)(App);
