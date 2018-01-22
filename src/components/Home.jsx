import React from 'react';
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
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  section: {
    backgroundColor: colors.orange,
    width: '100%'
  },
  heading: {
    color: colors.white,
    textAlign: 'center',
    width: '50%'
  },
  subtext:  {
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
  link: {
    fontStyle: 'italic',
    display: 'inline-block',
    textDecoration: 'underline',
    textDecorationColor: colors.pink,
    color: colors.black
  }
};

const Home = ({ sheet: {classes}, greeting }) => (
  <div className={classes.home}>
    <div className={classes.header}>
      <h2 className={classes.heading}>
        <span className={classes.classy}>{greeting},</span>
      </h2>
      <h2 className={classes.heading}>
        I'm Keenan Jaenicke and I'm a full stack web developer.
      </h2>
      <h3 className={classes.subtext}>
          I love building awesome web applications. Please check out my
           <a
            className={classes.link}
            href="#/about">
            skills
            </a> and reach out if you're interested in working together!
      </h3>
    </div>
  </div>
);

export default injectSheet(classes)(Home);
