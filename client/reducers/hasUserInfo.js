const defaultState = {
  hasListings: false,
  hasPrefs: false,
  hasPhotos: false
}

const hasUserInfo = function(state = defaultState, action) {
  // console.log('====> userinfo default return', state);
  switch(action.type) {
    case 'GETLISTINGS':
      state.hasListings = true;
      return state;


    case 'GET_PREFS':
      state.hasPrefs = true;
      return state;

    case 'FETCH_PHOTOS':
      state.hasPhotos = true;
      return state;

    default:
      return state;
  }
}

export default hasUserInfo;
