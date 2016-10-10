
import { FETCH_RESPONSES } from '../actionCreators/surveysActions';


const INITIAL_STATE = { all: [], photoPath:null };

function surveysResponses(state=[], action){
  // console.log('action received!!!!!!')
  switch(action.type) {
    case 'FETCH_RESPONSES':

     return { ...state, all: action.payload.data }
  default:
  return state;
  }
}

export default surveysResponses
