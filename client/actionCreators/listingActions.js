import axios from 'axios';

export const GET_LISTINGS = 'GETLISTINGS';
export const POST_LISTINGS = 'POSTLISTINGS';

export const getListings = function(user_id){
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

export const postListing = function(preference, user_id){
  const request = axios.post('/api/listings/', {
    location: preference.location,
    price: preference.price,
    pets: preference.pets
  }).catch((response) => {
    if(response instanceof Error){
      console.error('Error sending response', response);
    } else {
      console.error('Error from server', response);
    }
  });

  return {
    type: POST_LISTINGS,
    payload: request
  }

}
