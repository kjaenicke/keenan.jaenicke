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
      'fontSize': '17px'
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
      fontSize: '1rem',
      lineHeight: '1.5'
    },
    'span.byline': {
      fontSize: '.875rem'
    },
    '.language-js': {
      display: 'block',
      'overflow-x': 'auto',
      padding: '0.5em',
      color: '#abb2bf',
      background: '#282c34'
    },
    '.hljs-comment, .hljs-quote': {
      color: '#5c6370',
      fontStyle: 'italic'
    },
    '.hljs-keyword, .hljs-selector-tag, .hljs-subst': {
      color: '#d19a66',
      fontWeight: 'bold'
    },
    '.hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-tag .hljs-attr': {
      color: '#C6C5FE'
    },
    '.hljs-string, .hljs-doctag': {
      color: '#98c379'
    },
    '.hljs-title, .hljs-section, .hljs-selector-id': {
      color: '#900',
      fontWeight: 'bold'
    },
    '.hljs-subst': {
      fontWeight: 'normal'
    },
    '.hljs-type, .hljs-class .hljs-title': {
      color: '#458',
      fontWeight: 'bold'
    },
    '.hljs-tag, .hljs-name, .hljs-attribute': {
      color: '#f92672',
      fontWeight: 'normal'
    },
    '.hljs-regexp, .hljs-link': {
      color: '#009926'
    },
    '.hljs-symbol, .hljs-bullet': {
      color: '#990073'
    },
    '.hljs-built_in, .hljs-builtin-name': {
      color: '#0086b3'
    },
    '.hljs-meta': {
      color: '#999',
      fontWeight: 'bold'
    },
    '.hljs-deletion': {
      background: '#fdd'
    },
    '.hljs-addition': {
      background: '#dfd'
    },
    '.hljs-emphasis': {
      fontStyle: 'italic'
    },
    '.hljs-strong': {
      fontWeight: 'bold'
    }
  }
};

const GlobalStyleSheet = ({ sheet: {classes}, children }) => (<div>{ children }</div>);
export default injectSheet(classes)(GlobalStyleSheet);
