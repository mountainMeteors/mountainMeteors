import axios from 'axios';

export const GET_LISTINGS = 'GETLISTINGS';

export const getListings = function(preference){
  const request = axios.get('/api/listings' + user_id, {
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
    type: GET_LISTINGS,
    payload: request
  };
}

// const getListingsSuccess(res) {
//   return {
//     type: 'GETLISTINGSSUCCESS'
//     payload: res
//   }
// }
//
// export const getListings = function(){
//   return function(dispatch) {
//     axios.get('/api/listings')
//     .then(function (response) {
//       console.log('listings response received', response.data);
//
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
// };
//
//   const request = axios.get('/api/listings')
//   .then(function (response) {
//     console.log('listings response received', response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//
//
//   return {
//     type: GET_LISTINGS,
//     listings: request
//   };
// }
