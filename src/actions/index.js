import { createAction } from 'redux-actions';

export const fetchAllPosts = createAction('FETCH_ALL_POSTS');
export const fetchAllPostsSuccess = createAction('FETCH_ALL_POSTS_SUCCESS');
export const fetchAllPostsFailure = createAction('FETCH_ALL_POSTS_FAILURE');

export const fetchRunningPosts = createAction('FETCH_RUNNING_POSTS');
export const fetchRunningPostsSuccess = createAction('FETCH_RUNNING_POSTS_SUCCESS');
export const fetchRunningPostsFailure = createAction('FETCH_RUNNING_POSTS_FAILURE');

export const fetchRandomPosts = createAction('FETCH_RANDOM_POSTS');
export const fetchRandomPostsSuccess = createAction('FETCH_RANDOM_POSTS_SUCCESS');
export const fetchRandomPostsFailure = createAction('FETCH_RANDOM_POSTS_FAILURE');

export const fetchTechPosts = createAction('FETCH_TECH_POSTS');
export const fetchTechPostsSuccess = createAction('FETCH_TECH_POSTS_SUCCESS');
export const fetchTechPostsFailure = createAction('FETCH_TECH_POSTS_FAILURE');
