import * as actionTypes from '../actions';
import { combineReducers } from 'redux';

const mockAds = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' },
  { id: 4, name: '444' },
]

// 不能直接修改 state，不能直接修改 state

const ads = (state = mockAds, action) => {
  let tmpState = state.slice();
  switch (action.type) {
    case actionTypes.GET_ADS:
      return state;

    case actionTypes.UPDATE_AD:
      let { payload } = action;
      tmpState.map(item => {
        if (item.id === payload.id) {
          item = payload;
        }
        return item;
      })
      return tmpState;

    case actionTypes.DEL_AD:
      tmpState.splice(action.payload, 1)
      return [...tmpState];

    default:
      return state;
  }
}

const banners = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const list = (state = { a: '111', b: '222' }, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return state;

    default:
      return state;
  }
}

let rootReducer = combineReducers({
  ads, banners, list
})

export default rootReducer;