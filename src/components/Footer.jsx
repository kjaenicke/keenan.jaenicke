import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  footer: {
    display: 'flex',
    backgroundColor: colors.lightGrey,
    height: '10%'
  }
};

const Footer = ({ sheet: {classes} }) => (
  <footer className={classes.footer}>

  </footer>
);

export default injectSheet(classes)(Footer);
