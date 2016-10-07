import { FETCH_PHOTOS } from '../actionCreators/photoActions';

const INITIAL_STATE = { all: [], photoFiles:null };

function photoFiles (state=[], action){
    console.log('here in nnnnnnreducer data', action.payload.data);
  switch(action.type) {
    case 'FETCH_PHOTOS':
     return { ...state, all: action.payload.data }
  
  default:
  return state;
  }
}

export default photoFiles