const tokenExists = window.localStorage.getItem('userToken') !== null;

const auth = function(state = tokenExists, action) {
  let token;
  switch(action.type){
    // case 'SIGNUP':
    //   console.log('REDUC SIGNUP USER', action);
    //   return false;
      //TODO: SIGNUP should probably just log user in

    case 'LOGIN':
      token = action.payload.data.token ? action.payload.data.token : null;
      window.localStorage.setItem('userToken', token)
      if (token) {
        return true;
      } else {
        return false;
      }

    case 'LOGOUT':
      window.localStorage.removeItem('userToken');
      return false;

    default:
      return state;
  }
}

export default auth;
