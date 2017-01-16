import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';

const classes = {
  homeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  home: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    height: '100%',
    background: `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(./cover_photo.jpg) no-repeat center center fixed`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
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
  }
};

const Home = ({ sheet: {classes} }) => (
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
