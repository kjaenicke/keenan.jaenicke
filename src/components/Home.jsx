import React from 'react';
import { Link } from 'react-router';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  home: {
    height: '100%',
    padding: '0'
  },
  header: {
    margin: 0,
    backgroundColor: colors.orange,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  welcome: {
    margin: 0,
    color: colors.white,
    textAlign: 'center',
    width: '50%',
    display: 'inline-block'
  },
  classy: {
    backgroundColor: colors.black,
    color: colors.white,
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '2% 5% 2% 5%',
    marginRight: '10px',
    textAlign: 'center'
  },
  grad: {
    // border: `1px solid ${colors.pink}`,
    // width: '75%'
  },
  link: {
    display: 'inline-block',
    textDecoration: 'underline',
    textDecorationColor: colors.pink,
    color: colors.black
  }
};

const Home = ({ sheet: {classes}, greeting }) => (
  <div className={classes.home}>
    <header className={classes.header}>
      <h2><span className={classes.classy}>{greeting}, </span></h2>
      <h3 className={classes.welcome}>
        I'm Keenan Jaenicke and I'm a full stack web developer. I love building awesome web applications. Please check out my <a
          className={classes.link}
          href="#/about">skills
        </a> and reach out if you're interested in working together!
      </h3>
      <hr className={classes.grad} />
    </header>
  </div>
);

export default injectSheet(classes)(Home);
