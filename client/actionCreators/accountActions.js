import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';

export const signUpUser = function(user){
  console.log("USER OBJ", user)
  const request = axios.post('/api/signup', {
    email: user.email,
    password: user.password
  }).catch((response) => {
    if(response instanceof Error){
      console.error('Error sending response', response);
    } else {
      console.error('Error from server', response);
    }
  });
  //
  return {
    type: 'SIGNUP'
  };
}
