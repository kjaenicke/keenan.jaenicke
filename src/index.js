import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger';
import { __DEV__ } from './constants';

// Set up some global styles
// eslint-disable-next-line
import GlobalStylesSheet from './theme/GlobalStyleSheet';

// Redux and Sagas Setup
import reducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if(__DEV__){
  middlewares.push(createLogger());
}

// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
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
