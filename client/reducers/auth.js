const tokenExists = window.localStorage.getItem('userToken') !== null;

const auth = function(state = tokenExists, action) {
  let token;
  switch(action.type){
    case 'SIGNUP':
      console.log('REDUC SIGNUP USER', action);
      return false;
      //TODO: SIGNUP should probably just log user in

    case 'LOGIN':
      console.log('REDUC LOGIN USER', action);
      token = action.payload.data.token ? action.payload.data.token : null;
      window.localStorage.setItem('userToken', token)
      //TODO: Reducer should not be doing logic checks
      if (token) {
        console.log('LOGGED IN');
        return true;
      } else {
        console.log('ERROR LOGGING IN', token);
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
