import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'
import * as actionTypes from '../actions';
import * as api from '../api';

const delay = function (time) {
  setTimeout(function () {
    console.log(123);
    return 123;
  }, time);
}

function* mySaga() {
  const han = yield take(actionTypes.FETCH_FLOWERS);
  try {
    const flowers = yield call(delay, 1000);
    console.log('flowers: %o', flowers);
    yield put({ type: 'FETCH_FLOWERS_SUCCESS', flowers });
  } catch (e) {
    yield put({ type: 'FETCH_FLOWERS_ERROR', message: e.message });
  }
}

export default mySaga;