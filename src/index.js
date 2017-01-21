import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Set up some global styles
// eslint-disable-next-line
import GlobalStylesSheet from './theme/GlobalStyleSheet';

// Redux and Sagas Setup
import reducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <GlobalStylesSheet>
      <Routes />
    </GlobalStylesSheet>
  </Provider>,
  document.getElementById('root')
);
