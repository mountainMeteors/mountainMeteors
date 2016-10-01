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
        // return true;
        return Object.assign({}, state, {
          authenticated: true,
          user_id: action.payload.data.user_id
        })
      } else {
        console.log('ERROR LOGGING IN', token);
        return Object.assign({}, state, {
          authenticated: false,
          user_id: null
        })
      }

    case 'LOGOUT':
      window.localStorage.removeItem('userToken');
      return Object.assign({}, state, {
        authenticated: false,
        user_id: null
      });

    default:
      let returning = Object.assign({}, state, {
        authenticated: state,
        user_id: null
      })
      //TODO: This while loop is so hacky
      while (typeof returning.authenticated !== 'boolean') returning = returning.authenticated;
      // console.log('reduc returning', returning);
      return returning;
  }
}

export default auth;
