import { FETCH_RANKINGS } from '../actionCreators/rankingActions';

export default function(state=[], action){
  switch(action.type) {
    // console.log('action received', action)
    case FETCH_RANKINGS:
    console.log('in rankings redeucersss!!!', '++==', action.payload.data)
     return [
     state.concat([action.payload.data])]
  }

  return state;
}
