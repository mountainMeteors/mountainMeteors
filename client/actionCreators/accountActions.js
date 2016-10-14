import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNOUT_USER = 'SIGNOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_PREFS = 'GET_PREFS';

export const signUpUser = function(user){
  console.log("ACTION SIGNUP USER", user)

  const request = axios.post('/api/signup', {
    email: user.email,
    password: user.password
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: 'LOGIN',
    payload: request
  };
}


export const loginUser = function(user){
  console.log("ACTION LOGIN USER", user)

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
    console.log(error);
  });

  return {
    type: 'LOGIN',
    payload: request
  };
}

export const logoutUser = function(user){
  console.log("ACTION LOGOUT USER", user)

  return {
    type: 'LOGOUT'
  };
}

export const getPrefs = function(){
  console.log("ACTION GET PREFS")
  const request = axios.get('/api/surveys', {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  })
  .catch(function (error) {
    console.log(error);
  });


  return {
    type: GET_PREFS,
    payload: request
  };
}
