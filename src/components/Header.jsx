import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

import HomeButton from './HomeButton';

const classes = {
  header: {
    display: 'flex',
    height: '30%',
    backgroundColor: colors.lightGrey,
    justifyContent: 'flex-end'
  },
  homeButton: {
    alignSelf: 'flex-start'
  },
  menu: {
    display: 'flex',
    flex: 1,
    listStyle: 'none'
  },
  menuItem: {
    color: colors.darkGrey,
    cursor: 'pointer',
    fontSize: '24px',
    margin: '0 10px 0 10px',
    '&:hover': {
      color: colors.green,
      transform: 'scale(1.075)'
    },
    transition: 'color 1s, transform 0.35s'
  },
  '@media (max-width: 425px)': {
    header: {
      height: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center'
    },
    menu: {
      flexWrap: 'wrap',
      flexDirection: 'column'
    }
  }
};

const Header = ({ sheet: {classes}, props }) => (
  <header className={classes.header}>
    <HomeButton />
    <ul className={classes.menu}>
      <li className={classes.menuItem}>Tech</li>
      <li className={classes.menuItem}>Running</li>
      <li className={classes.menuItem}>About</li>
      <li className={classes.menuItem}>Contact</li>
    </ul>
  </header>
);

export default injectSheet(classes)(Header);
