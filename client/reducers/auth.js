const tokenExists = window.localStorage.getItem('userToken') === null

const auth = function(state = tokenExists, action) {
  switch(action.type){
    case 'SIGNUP':
      console.log('REDUC SIGNUP USER', action);

    case 'LOGIN':
      let token = action.payload.data.token ? action.payload.data.token : null;
      window.localStorage.setItem('userToken', token)
      if (token) console.log('LOGGED IN');
      else console.log('ERROR LOGGING IN', token);
      console.log('login reduc returning', Object.assign({}, state, {authenticated: true}));
      // return Object.assign({}, state, {authenticated: true});
      return !!token;

    default:
      return state;
  }
}

export default auth;
