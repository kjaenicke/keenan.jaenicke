import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  header: {
    display: 'flex',
    backgroundColor: colors.lightGrey,
    justifyContent: 'flex-end'
  },
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none'
  },
  menuItem: {
    color: colors.darkGrey,
    cursor: 'pointer',
    fontSize: '24px',
    margin: '0 10px 0 10px',
    '&:hover': {
      color: colors.green,
      borderBottom: `1px solid ${colors.green}`,
      transform: 'scale(1.075)'
    },
    transition: 'color 1s, border-bottom 1s, transform 0.35s'
  }
};

const Header = ({ sheet: {classes}, props }) => (
  <header className={classes.header}>
    <ul className={classes.menu}>
      <li className={classes.menuItem}>Home</li>
      <li className={classes.menuItem}>About</li>
      <li className={classes.menuItem}>Contact</li>
    </ul>
  </header>
);

export default injectSheet(classes)(Header);
