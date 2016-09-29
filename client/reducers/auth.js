const tokenExists = window.localStorage.getItem('userToken') === null

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
      if (token) {
        console.log('LOGGED IN');
        return Object.assign({}, state, {
          authenticated: true,
          user_id: action.payload.data.user_id
        })
      } else {
        console.log('ERROR LOGGING IN', token);
        return Object.assign({}, state, {
          authenticated: false
        })
      }
      // console.log('login reduc returning', Object.assign({}, state, {authenticated: true}));
      ;
      // return !!token;

    case 'LOGOUT':
      window.localStorage.setItem('userToken', null)
      // console.log('LOGOUT REDUC');
      // return Object.assign({}, state, {authenticated: true});
      return false;

    default:
      return state;
  }
}

export default auth;
