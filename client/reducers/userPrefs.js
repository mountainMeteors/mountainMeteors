const userPrefs = function(state = {}, action) {
  switch(action.type){
    case 'GET_PREFS':
      // console.log('REDUC GET PREFS', action);
      return action.payload ?
        Object.assign({}, state, action.payload.data):
        {};

    default:
      return state;
  }
}

export default userPrefs;
