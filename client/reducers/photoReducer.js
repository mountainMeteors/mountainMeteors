import { FETCH_PHOTOS } from '../actionCreators/photoActions';

const INITIAL_STATE = { all: [], photoFiles:null };

export default function (state=[], action){
    // console.log('reducer data', action.payload);
  switch(action.type) {
    case FETCH_PHOTOS:

     return { ...state, all: action.payload.data }
  default:
  return state;
  }
}
