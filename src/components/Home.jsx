import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';

const classes = {
  homeWrapper: {
    height: '100%'
  },
  home: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  header: {
    flex: 1,
    ...common.pageLayout.pageHeader,
    color: colors.white
  },
  subHeader: {
    flex: 2,
    width: '75%',
    alignSelf: 'center',
    color: colors.white,
    textAlign: 'center',
    padding: '10px'
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center'
  },
  me: {
    alignSelf: 'center',
    width: '25%',
    border: `10px solid ${colors.white}`,
    margin: '2%'
  },
  bio: {
    color: colors.white,
    width: '75%',
    alignSelf: 'center'
  },
  '@media (max-width: 425px)': {
    me: {
      width: '50%'
    }
  }
};

const Home = ({ sheet: {classes}, posts }) => (
  <div className={classes.homeWrapper}>
    <div className={classes.home}>
      <h2 className={classes.header}>
        Always Creating
      </h2>
      <h3 className={classes.subHeader}>
        I'm a developer that's passionate about building interesting,
        engaging applications with modern web technologies.
      </h3>
    </div>
  </div>
);

export default injectSheet(classes)(Home);
