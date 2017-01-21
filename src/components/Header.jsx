import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router';
import colors from '../theme/colors';

const classes = {
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: colors.white
  },
  homeButton: {
    alignSelf: 'flex-start'
  },
  menu: {
    flex: 1,
    display: 'flex',
    alignSelf: 'flex-end',
    listStyle: 'none',
    '& a': {
      textDecoration: 'none',
      '&.active > li': {
        color: colors.brown
      }
    }
  },
  menuItem: {
    color: colors.darkGrey,
    cursor: 'pointer',
    fontSize: '24px',
    margin: '0 10px 0 10px',
    '&:hover': {
      color: colors.brown,
      transform: 'scale(1.075)'
    },
    transition: 'color 1s, transform 0.35s'
  },
  '@media (max-width: 425px)': {
    header: {
      height: '100%',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    menu: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '0px'
    }
  }
};

const Header = ({ sheet: {classes} }, context) => {
  return (
    <header className={classes.header}>
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
        <Link activeClassName="active" to="/about">
          <li className={classes.menuItem}>About</li>
        </Link>
      </ul>
    </header>
  );
};

Header.contextTypes = {
  router: React.PropTypes.object
};

export default injectSheet(classes)(Header);
