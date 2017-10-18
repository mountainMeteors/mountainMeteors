import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_PREFS = 'GET_PREFS';

export const signUpUser = function(user){
  const request = axios.post('/api/signup', {
    email: user.email,
    password: user.password
  })
  .catch(function (error) {
    console.error(error);
  });

  return {
    type: 'LOGIN',
    payload: request
  };
}


export const loginUser = function(user){
  const request = axios.post('/api/login', {
    email: user.email,
    password: user.password
  },
  {
    headers: {
      'x-access-token': window.localStorage.getItem('userToken')
    }
  })
  .catch(function (error) {
    console.error(error);
  });

  return {
    type: 'LOGIN',
    payload: request
  };
}

export const logoutUser = function(user){
  return {
    type: 'LOGOUT'
  };
}

export const getPrefs = function(){
  const request = axios.get('/api/surveys', {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  })
  .catch(function (error) {
    console.error(error);
  });


  return {
    type: GET_PREFS,
    payload: request
  };
}
