import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';

const classes = {
  header: {
    ...common.pageLayout.pageHeader,
    color: colors.white
  },
  contactWrapper: {
    height: '100%'
  },
  contact: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.lightGreen
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
        color: colors.black
      }
    }
  },
  followMe: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flex: 1,
    color: colors.white,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center'
  }
};

const Contact = ({ sheet: {classes} }) => (
  <div className={classes.contactWrapper}>
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

export default injectSheet(classes)(Contact);
