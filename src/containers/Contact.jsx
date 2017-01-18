import React from 'react';
import injectSheet from 'react-jss';
import * as common from '../theme/common';
import colors from '../theme/colors';

const classes = {
  header: {
    ...common.pageLayout.pageHeader,
    color: colors.white
  },
  contact: {
    display: 'flex',
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
      fontSize: '6em'
    }
  }
};

const Contact = ({ sheet: {classes} }) => (
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
  </div>
);

export default injectSheet(classes)(Contact);
