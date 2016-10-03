import { GETLISTINGS } from '../actionCreators/listingActions'

// function listings(state = {all: []}, action) {
function listings(state = [], action) {
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('listings reducer triggered. listings:', action);
      // console.log('listing reduc returning', Object.assign([], state, action.payload.data));
      // console.log('assigning', Object.assign([], state, action.payload.data));
      console.log('reducer state', state);
      // return action.payload.data;
      // return {...state, all: action.payload.data};
      return Object.assign([], state, action.payload.data);
      // return action.payload.data; // WORKS BUT NOT REACTY

    case 'PUTLISTING':
      console.log('reducer heard put listing', action.payload);

    default:
      return state;
  }
}

export default listings;
