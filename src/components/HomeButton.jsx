import React from 'react';
// import { Link } from 'react-router';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  homeButton: {
    flex: 2,
    margin: '10px'
  },
  '@media (max-width: 425px)': {
    iconSVG: {
      height: '100%',
      flex: 1
    },
    homeButton: {
      flex: 1,
      alignSelf: 'center'
    }
  },
  iconSVG: {
    width: 'auto',
    height: '50%',
    '&:hover': {
      '& text': {
        fill: 'white'
      },
      '& circle': {
        fill: colors.lightGreen
      }
    },
    '& text': {
      fill: colors.green,
      transition: 'fill 0.5s'
    },
    '& circle': {
      fill: 'white',
      stroke: colors.lightGreen,
      strokeWidth: '2px',
      transition: 'fill 0.5s'
    }
  }
};

const HomeButton = ({ sheet: {classes} }) => (
  <div className={classes.homeButton}>
    <svg className={classes.iconSVG} xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 55 55">
      <circle r="25" cx="25" cy="25" />
      <text textAnchor="middle" x="25" y="25">KJ</text>
    </svg>
  </div>
);

export default injectSheet(classes)(HomeButton);
