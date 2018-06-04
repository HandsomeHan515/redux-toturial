import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'
import * as actionTypes from '../actions';
import * as api from '../api';

function* mySaga() {
  const han = yield take(actionTypes.FETCH_FLOWERS);
  console.log(han)
  try {
    const flowers = yield call(api.getFlowers);
    console.log('flowers: %o', flowers);
    yield put({ type: 'FETCH_FLOWERS_SUCCESS', flowers });
  } catch (e) {
    yield put({ type: 'FETCH_FLOWERS_ERROR', message: e.message });
  }
}

export default mySaga;