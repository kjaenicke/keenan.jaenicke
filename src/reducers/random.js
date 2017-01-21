import makePostReducer from './makePostReducer';
import { fetchRandomPosts, fetchRandomPostsSuccess, fetchRandomPostsFailure } from '../actions';

const tech = makePostReducer({
  requestAction: fetchRandomPosts,
  successAction: fetchRandomPostsSuccess,
  failureAction: fetchRandomPostsFailure
});

export default tech;
