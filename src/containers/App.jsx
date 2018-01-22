import React from 'react';
import injectSheet from 'react-jss';

import Menu from '../components/Menu';

const classes = {
  app: {
    height: '100%',
    overflow: 'hidden',
    margin: 0,
    display: 'flex',
    boxSizing: 'border-box',
    '@media (max-width: 480px)': {
      flexDirection: 'column'
    }
  },
  menu: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    flexGrow: 1,
    overflowY: 'auto',
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    '@media (max-width: 480px)': {
      width: '100%',
      height: '100px',
      boxShadow: 'none'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    flexGrow: 1,
    overflowY: 'auto',
    '@media (max-width: 480px)': {
      width: '100%'
    }
  }
};

const App = ({ sheet: {classes}, children }) => (
  <div className={classes.app}>
    <div className={classes.menu}>
      <Menu />
    </div>
    <div className={classes.content}>
       {children}
     </div>
  </div>
);

export default injectSheet(classes)(App);
