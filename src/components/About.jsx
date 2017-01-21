import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';
import me from '../img/me.jpeg';

const classes = {
  header: {
    ...common.pageLayout.pageHeader,
    color: colors.white
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
  },
  contact: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darkGrey
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    '& a': {
      display: 'inline-block',
      margin: '0 2% 0 2%',
      color: colors.white
    },
    '& i.fa': {
      fontSize: '6em',
      transition: 'transform 1s, color 1s',
      '&:hover': {
        transform: 'scale(1.2)',
        color: colors.green
      }
    }
  },
  followMe: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    color: colors.white,
    justifyContent: 'center',
    marginBottom: '5%',
    '& p': {
      margin: '2% 2% 0 2%'
    }
  }
};

const About = ({ sheet: {classes} }) => (
  <div className={classes.contactWrapper}>
    <div className={classes.about}>
        <h3 className={classes.header}>About Me</h3>
        <img className={classes.me} src={me} alt="me in new york city" />
        <p className={classes.bio}>
          Hi! I'm Keenan Jaenicke. I enjoy running, reading, hiking, playing guitar, and being outdoors.
          I live in Indianapolis with my girlfriend and two dogs.  I graduated from Purdue University in 2013 with
          a degree in Computer Information Technology and have worked as a software developer since then.
        </p>
    </div>
    <div className={classes.contact}>
      <h3 className={classes.header}>
        Contact
      </h3>
      <div className={classes.icons}>
        <a href="https://www.linkedin.com/in/KeenanJae" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/KeenanJae" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/kjaenicke" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
      <div className={classes.followMe}>
        <p>Let's get in touch! Please follow me on Github, Twitter, and/or Github!</p>
      </div>
    </div>
  </div>
);

export default injectSheet(classes)(About);
