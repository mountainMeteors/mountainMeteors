import { FETCH_RANKINGS } from '../actionCreators/rankingActions';

const INITIAL_STATE = { all: [], post:null };

export default function(state=[], action){
  switch(action.type) {
    // console.log('action received', action)
    case FETCH_RANKINGS:
    console.log('in rankings redeucersss!!!', '++==', action.payload.data)
     return { ...state, all: action.payload.data }

  default
  return state;
  }
}
