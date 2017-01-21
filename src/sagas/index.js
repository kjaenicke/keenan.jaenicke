import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../api';
import * as Actions from '../actions';

function* fetchAllPostsSaga(action) {
   try {
      const posts = yield call(API.fetchAllPosts);
      yield put(Actions.fetchAllPostsSuccess(posts));
   } catch (e) {
      yield put(Actions.fetchAllPostsFailure(e));
   }
}

function* fetchTechPostsSaga(action) {
   try {
      const posts = yield call(API.fetchTechPosts);
      yield put(Actions.fetchTechPostsSuccess(posts));
   } catch (e) {
      yield put(Actions.fetchTechPostsFailure(e));
   }
}

function* fetchRunningPostsSaga(action) {
   try {
      const posts = yield call(API.fetchRunningPosts);
      yield put(Actions.fetchRunningPostsSuccess(posts));
   } catch (e) {
      yield put(Actions.fetchRunningPostsFailure(e));
   }
}

function* fetchRandomPostsSaga(action) {
   try {
      const posts = yield call(API.fetchRandomPosts);
      yield put(Actions.fetchRandomPostsSuccess(posts));
   } catch (e) {
      yield put(Actions.fetchRandomPostsFailure(e));
   }
}

function* saga() {
  yield takeLatest(Actions.fetchAllPosts, fetchAllPostsSaga);
  yield takeLatest(Actions.fetchTechPosts, fetchTechPostsSaga);
  yield takeLatest(Actions.fetchRunningPosts, fetchRunningPostsSaga);
  yield takeLatest(Actions.fetchRandomPosts, fetchRandomPostsSaga);
}

export default saga;
