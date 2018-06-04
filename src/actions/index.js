export const GET_ADS = 'GET_ADS';
export const UPDATE_AD = 'UPDATE_AD';
export const DEL_AD = 'DEL_AD';
export const CREATE_AD = 'CREATE_AD';

export const GET_LIST = 'GET_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';

export const getAds = payload => ({
  type: GET_ADS,
  payload
});

export const createAd = payload => ({
  type: CREATE_AD,
  payload
})

export const updateAd = payload => ({
  type: UPDATE_AD,
  payload
});

export const delAd = payload => ({
  type: DEL_AD,
  payload
})


export const getList = payload => ({
  type: GET_LIST,
  payload
});

export const updateList = payload => ({
  type: UPDATE_LIST,
  payload
})

export const FETCH_FLOWERS = 'FETCH_FLOWERS';