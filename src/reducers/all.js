import makePostReducer from './makePostReducer';
import { fetchAllPosts, fetchAllPostsSuccess, fetchAllPostsFailure } from '../actions';

const all = makePostReducer({
  requestAction: fetchAllPosts,
  successAction: fetchAllPostsSuccess,
  failureAction: fetchAllPostsFailure
});

export default all;
