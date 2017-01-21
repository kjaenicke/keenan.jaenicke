import makePostReducer from './makePostReducer';
import { fetchRunningPosts, fetchRunningPostsSuccess, fetchRunningPostsFailure } from '../actions';

const tech = makePostReducer({
  requestAction: fetchRunningPosts,
  successAction: fetchRunningPostsSuccess,
  failureAction: fetchRunningPostsFailure
});

export default tech;
