import React from 'react';
import injectSheet from 'react-jss';

import Header from '../components/Header';
// import Footer from '../components/Footer';

const classes = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  header: {},
  content: {
    flex: 4
  }
};

const App = ({ sheet: {classes}, children }) => (
  <div className={classes.app}>
    <div className={classes.header}>
      <Header />
    </div>
    <div className={classes.content}>
      {children}
    </div>
    { /* <Footer /> */ }
  </div>
);

export default injectSheet(classes)(App);
