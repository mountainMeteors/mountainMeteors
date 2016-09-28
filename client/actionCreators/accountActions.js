import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const signUpUser = function(user){
  console.log("ACTION SIGNUP USER", user)

  const request = axios.post('/api/signup', {
    email: user.email,
    password: user.password
  })

    // TODO: ENABLING THIS .THEN MAKES PAYLOAD UNDEFINED, BUT WITHOUT IT THERE'S NO ERROR REPORTING
  // .then(function(res) {
  //   console.log(res.data);
  // });
  //
  return {
    type: 'SIGNUP',
    payload: request
  };
}


export const loginUser = function(user){
  console.log("ACTION SIGNUP USER", user)

  const request = axios.post('/api/login', {
    email: user.email,
    password: user.password
  })

    // TODO: ENABLING THIS .THEN MAKES PAYLOAD UNDEFINED, BUT WITHOUT IT THERE'S NO ERROR REPORTING
  // .then(function(res) {
  //   console.log(res.data);
  // });
  //
  return {
    type: 'LOGIN',
    payload: request
  };
}
