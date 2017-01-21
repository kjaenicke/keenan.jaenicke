import { combineReducers } from 'redux';

import all from './all';
import tech from './tech';
import running from './running';
import random from './random';

const rootReducer = combineReducers({
  all,
  random,
  running,
  tech
});

export default rootReducer;
