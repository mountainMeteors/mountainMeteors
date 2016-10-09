const defaultState = {
  hasListings: false,
  hasPrefs: false,
  hasPhotos: false
}

const hasUserInfo = function(state = defaultState, action) {
  console.log('====> userinfo default return', state);
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('setting listings = true');
      state.hasListings = true;
      return state;


    case 'GET_PREFS':
      console.log('setting prefs = true');
      state.hasPrefs = true;
      return state;

    case 'FETCH_PHOTOS':
      console.log('setting photos = true');
      state.hasPhotos = true;
      return state;

    default:
      return state;
  }
}

export default hasUserInfo;
