import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router';
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
    listStyle: 'none',
    '& a': {
      textDecoration: 'none',
      '&.active > li': {
        color: colors.green
      }
    }
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

const Header = ({ sheet: {classes} }, context) => {
  const { router } = context;

  return (
    <header className={classes.header}>
      <HomeButton />
      <ul className={classes.menu}>
        <Link activeClassName="active" to="/home">
          <li className={classes.menuItem}>Home</li>
        </Link>
        <Link activeClassName="active" to="/tech">
          <li className={classes.menuItem}>Tech</li>
        </Link>
        <Link activeClassName="active" to="/running">
          <li className={classes.menuItem}>Running</li>
        </Link>
        <Link activeClassName="active" to="/random">
          <li className={classes.menuItem}>Random</li>
        </Link>
        <Link activeClassName="active" to="/contact">
          <li className={classes.menuItem}>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object
};

export default injectSheet(classes)(Header);
