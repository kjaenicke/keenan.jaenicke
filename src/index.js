import React from 'react';
import { render } from 'react-dom';
import Routes from './router';

// Set up some global styles
// eslint-disable-next-line
import GlobalStylesSheet from './theme/GlobalStyleSheet';

render(
  <GlobalStylesSheet>
    <Routes />
  </GlobalStylesSheet>,
  document.getElementById('root')
);
