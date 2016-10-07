import { FETCH_PHOTOS } from '../actionCreators/photoActions';

const INITIAL_STATE = { all: [], photoPath:null };

export default function(state=[], action){
    console.log('action received!!!!!!')
  switch(action.type) {
    case 'FETCH_PHOTOS':
    console.log('reducer data', action.payload.data);
 
     return { ...state, all: action.payload.data }
  
  default:
  return state;
  }
}