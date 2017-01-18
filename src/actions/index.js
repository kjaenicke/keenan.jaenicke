import { createAction } from 'redux-actions';

export const fetchTechPosts = createAction('FETCH_TECH_POSTS');
export const fetchTechPostsSuccess = createAction('FETCH_TECH_POSTS_SUCCESS');
export const fetchTechPostsFailure = createAction('FETCH_TECH_POSTS_FAILURE');
