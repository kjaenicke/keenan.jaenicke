import { combineReducers } from 'redux';

import tech from './tech';
import running from './running';
import random from './random';

const rootReducer = combineReducers({
  random,
  running,
  tech
});

export default rootReducer;
