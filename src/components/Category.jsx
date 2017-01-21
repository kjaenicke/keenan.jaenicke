import React from 'react';
import injectSheet from 'react-jss';
import colors from '../theme/colors';

const classes = {
  category: {
    padding: '5px',
    borderRadius: '5px',
    margin: '0 10px 0 10px',
    textAlign: 'center'
  },
  tech: {
    extend: 'category',
    backgroundColor: colors.green,
    color: colors.white
  },
  random: {
    extend: 'category',
    backgroundColor: colors.yellow,
    color: colors.darkGrey
  },
  running: {
    extend: 'category',
    backgroundColor: colors.purple,
    color: colors.white
  }
};

const getColor = (name, classes) => {
  switch (name) {
    case 'Tech':
      return classes.tech;

    case 'Random':
      return classes.random;

    case 'Running':
      return classes.running;

    default:
      return classes.tech;
  }
};

const Category = ({ sheet: {classes}, name }) => (
  <span className={getColor(name, classes)}>
    {name}
  </span>
);

export default injectSheet(classes)(Category);
