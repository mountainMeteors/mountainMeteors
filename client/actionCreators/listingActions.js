import axios from 'axios';

export const GET_LISTINGS = 'GETLISTINGS';
export const POST_LISTINGS = 'POSTLISTINGS';
export const PUT_LISTING = 'PUTLISTING';

export const getListings = function(){
  // Get request w/ header of token
  const request = axios.get('/api/listings/', {
    headers: {'x-access-token': window.localStorage.getItem('userToken')}
  })
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.error(error);
  });

  return {
    type: GET_LISTINGS,
    payload: request
  };
}

export const postListing = function(preference){
  const request = axios.post('/api/listings/', {
    url: preference.url,
    location: preference.location,
    rent: preference.rent,
    pets: preference.pets,
    lat: preference.lat,
    lng: preference.lng,
    neighborhood: preference.neighborhood,
    squareFeet: preference.squareFeet,
    bedrooms: preference.bedrooms,
    bathrooms: preference.bathrooms,
    dishwasher: preference.dishwasher,
    gym: preference.gym,
    laundry: preference.gym,
    pool: preference.pool,
    roof: preference.roof,
    doorman: preference.doorman,
    outdoorSpace: preference.outdoorSpace,
    elevator: preference.elevator,
    garage: preference.garage,
    noFee: preference.noFee


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
  const request = axios.put('/api/listings/', edits, { //TODO: Should be wildcard, not header
    headers: {'listing-id': id}
  })
  .then((response) => {
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
