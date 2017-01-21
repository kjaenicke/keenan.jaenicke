import makePostReducer from './makePostReducer';
import { fetchTechPosts, fetchTechPostsSuccess, fetchTechPostsFailure } from '../actions';

const tech = makePostReducer({
  requestAction: fetchTechPosts,
  successAction: fetchTechPostsSuccess,
  failureAction: fetchTechPostsFailure
});

export default tech;
