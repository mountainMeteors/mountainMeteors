import axios from 'axios';

export const GET_LISTINGS = 'GETLISTINGS';

export const getListings = function(user_id){
  console.log('action running');
  const request = axios.get('/api/listings/' + user_id)
  // .then(function (response) {
  //   console.log('listings response received', response.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });


  return {
    type: GET_LISTINGS,
    payload: request
  };
}
