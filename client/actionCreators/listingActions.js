import axios from 'axios';

export const GET_LISTINGS = 'GETLISTINGS';
export const POST_LISTINGS = 'POSTLISTINGS';
export const PUT_LISTING = 'PUTLISTING';

export const getListings = function(){
  // Get request w/ header of token
  console.log('ACTION GET LISTINGS');
  const request = axios.get('/api/listings/', {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  })
  .then(function (response) {
    console.log('=====> listings response received', response.data);
    return response;
  })
  .catch(function (error) {
    console.log('=====> getlistings err', error);
  });

  return {
    type: GET_LISTINGS,
    payload: request
  };
}

export const postListing = function(preference){
  console.log("PREF******", preference)
  const request = axios.post('/api/listings/', {
    url: preference.url,
    location: preference.location,
    rent: preference.rent,
    pets: preference.pets,
    lat: preference.lat,
    lng: preference.lng
  }, {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  }).catch((response) => {
    if(response instanceof Error){
      console.error('Error sending response', response);
    } else {
      console.error('Error from server', response);
    }
  });

  return {
    type: POST_LISTINGS,
    payload: preference //TODO: Somehow listing ID needs to be inserted before this is returned
  }
}

export const putListing = function(id, edits) {;
  console.log('put action', id, 'changing', edits);
  const request = axios.put('/api/listings/', edits, { //TODO: Should be wildcard, not header
    headers: {'listing-id': id}
  })
  .then((response) => {
    console.log('PUT received response', response);
    return response;
  })
  .catch((response) => {
    if(response instanceof Error){
      console.error('Error sending response', response);
    } else {
      console.error('Error from server', response);
    }
  });

  return {
    type: PUT_LISTING,
    payload: {id, edits}
  }
}
