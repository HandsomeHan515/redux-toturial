export const GET_ADS = 'GET_ADS';

export const GET_LIST = 'GET_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const getAds = payload => ({
  type: GET_ADS,
  ...payload
});

export const getList = payload => ({
  type: GET_LIST,
  ...payload
});

export const updateList = payload => ({
  type: UPDATE_LIST,
  ...payload
})