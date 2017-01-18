import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';

import me from '../img/me.jpeg';

const classes = {
  homeWrapper: {
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
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    backgroundColor: colors.lightGreen,
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
    <div className={classes.about}>
      <h3 className={classes.subHeader}>About Me</h3>
      <img className={classes.me} src={me} alt="me in new york city" />
      <p className={classes.bio}>
        Hey there! I'm Keenan Jaenicke. I enjoy running, reading, hiking, playing guitar, and being outdoors.
        I live in Indianapolis with my girlfriend and two dogs.  I graduate from Purdue University in 2013 with
        a degree in Computer Information Technology and have worked as a software developer since then.
      </p>
    </div>
  </div>
);

export default injectSheet(classes)(Home);
