import React from 'react';
import injectSheet from 'react-jss';

const classes = {
  '@global': {
    'html, body, div#root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '0px',
      margin: '0px',
      fontFamily: "'Slabo 27px', serif"
    },
    // Font scaling
    // https://css-tricks.com/rems-ems/
    // Document level adjustments
    'html': {
      'fontSize': '16px'
    },
    '@media (max-width: 900px)': {
      html: { fontSize: '15px' }
    },
    '@media (max-width: 400px)': {
      html: { fontSize: '13px' }
    },
    // Type will scale with document
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    },
    h3: {
      fontSize: '2.25rem'
    },
    p: {
      fontSize: '1rem'
    }
  }
};

const GlobalStyleSheet = ({ sheet: {classes}, children }) => (<div>{ children }</div>);
export default injectSheet(classes)(GlobalStyleSheet);
