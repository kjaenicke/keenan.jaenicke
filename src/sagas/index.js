import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as API from '../api';
import { fetchTechPosts, fetchTechPostsSuccess, fetchTechPostsFailure } from '../actions';

function* fetchTechPostsSaga(action) {
   try {
      const posts = yield call(API.fetchTechPosts);
      yield put(fetchTechPostsSuccess(posts));
   } catch (e) {
      yield put(fetchTechPostsFailure(e));
   }
}

function* saga() {
  yield takeLatest(fetchTechPosts, fetchTechPostsSaga);
}

export default saga;
