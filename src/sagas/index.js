import { call, put } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions';
import api from '../api';

function* getFlowers(action) {
  try {
    const flowers = yield call(api.flower);
    console.log('flowers', flowers);
    yield put({ type: 'FETCH_FLOWERS_SUCCESS', flowers });
  } catch (e) {
    yield put({ type: 'FETCH_FLOWERS_ERROR', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(actionTypes.FETCH_FLOWERS, getFlowers);
}

export default mySaga;