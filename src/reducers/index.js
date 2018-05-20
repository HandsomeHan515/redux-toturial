import * as actionTypes from '../actions';
import { combineReducers } from 'redux';

const ads = (state = [1, 2], action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return state.concat([1, 2, 3]);
    default:
      return state;
  }
}

const banners = (state = [1, 2, 3, 4], action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return state.concat([1, 2, 3]);
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  ads, banners
})

export default rootReducer;