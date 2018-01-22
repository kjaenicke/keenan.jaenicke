import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router';
import colors from '../theme/colors';

const classes = {
  navigation: {
    backgroundColor: colors.darkGrey,
    flexGrow: 1,
    overflowY: 'auto'
  },
  homeButton: {
    alignSelf: 'flex-start'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    listStyle: 'none',
    paddingLeft: '0px',
    '& a': {
      textDecoration: 'none',
      '&.active > li': {
        textDecoration: 'underline',
        textDecorationColor: colors.orange
      }
    },
    // Remove border from first menu item
    '& > a:first-of-type': {
      '& li': {
        borderTop: 'none'
      }
    },
    '@media (max-width: 480px)': {
      display: 'none'
    }
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.white,
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '20px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 10px 0 10px',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: colors.orange
    },
    transition: 'color 1s, transform 0.35s',
  },
  menuItemLogo: {
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    padding: '10% 2% 10% 2%',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    backgroundColor: colors.black,
    '@media (max-width: 480px)': {
      padding: 0,
      justifyContent: 'flex-start'
    }
  },
  logo: {
    '@media (max-width: 480px)': {
      width: '75px',
      height: '75px',
      '& text': {
        fontSize: '2.5rem'
      }
    }
  },
  homeLink: {
    textDecoration: 'none' 
  },
  tagline: {
    fontFamily: 'Permanent Marker, cursive',
    '@media (max-width: 480px)': {
      display: 'none'
    }
  },
  social: {
    textAlign: 'center',
    fontSize: '2rem'
  },
  twitter: {
    textDecoration: 'none',
    color: colors.white
  }
};

const Menu = ({ sheet: {classes} }, context) => {
  return (
    <div className={classes.navigation}>
      <a href="#/home" className={classes.homeLink}>
        <div className={classes.menuItemLogo}>
          <svg width="250" height="250" className={classes.logo}>
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor={colors.pink} />
                <stop offset="100%" stopColor={colors.orange} />
              </linearGradient>
            </defs>
            <circle
              id="firstCircle"
              cx="50%"
              cy="50%"
              r="30%"
              fill="url(#gradient)"
              stroke={colors.white}>
              strokeWidth="1%"
            </circle>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill={colors.white}
              fontSize="3rem"
              fontFamily="Permanent Marker, cursive"
              fontWeight="100"
              dy=".3em">KJ
            </text>
          </svg>
          <span className={classes.tagline}>Always creating</span>
        </div>
      </a>
      <ul className={classes.menu}>
        <Link activeClassName="active" to="/home">
          <li className={classes.menuItem}>Home</li>
        </Link>
        <Link activeClassName="active" to="/about">
          <li className={classes.menuItem}>About</li>
        </Link>
      </ul>
      <div className={classes.social}>
        <a className={classes.twitter} href="https://twitter.com/intent/follow?screen_name=KeenanJae">
          <i className="fa fa-twitter" />
        </a>
      </div>
    </div>
  );
};

Menu.contextTypes = {
  router: React.PropTypes.object
};

export default injectSheet(classes)(Menu);
