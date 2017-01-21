import makePostReducer from './makePostReducer';
import { fetchRunningPosts, fetchRunningPostsSuccess, fetchRunningPostsFailure } from '../actions';

const running = makePostReducer({
  requestAction: fetchRunningPosts,
  successAction: fetchRunningPostsSuccess,
  failureAction: fetchRunningPostsFailure
});

export default running;
