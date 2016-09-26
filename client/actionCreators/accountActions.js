import axios from 'axios';



export const LOGIN_USER = 'LOGIN_USER';

export function loginUser(email, password){
  // const request = axios.post('/login', {user: {
  //   email: email,
  //   password: password
  // }}).catch((response) => {
  //   if(response instanceof Error){
  //     console.error('Erros sending response', response);
  //   } else {
  //     console.error('Error from server', response);
  //   }
  // });
  //
  // return {
  //   type: LOGIN_USER,
  //   payload: request
  // };

  return {
    type: 'LOGIN'
  }
}
