import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Set up some global styles
// eslint-disable-next-line
import globalStyles from './theme/global.css';

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
    <Routes />
  </Provider>,
  document.getElementById('root')
);
