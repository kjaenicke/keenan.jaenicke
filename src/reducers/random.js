import makePostReducer from './makePostReducer';
import { fetchRandomPosts, fetchRandomPostsSuccess, fetchRandomPostsFailure } from '../actions';

const random = makePostReducer({
  requestAction: fetchRandomPosts,
  successAction: fetchRandomPostsSuccess,
  failureAction: fetchRandomPostsFailure
});

export default random;
