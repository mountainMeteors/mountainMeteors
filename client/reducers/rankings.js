import { FETCH_RANKINGS } from '../actionCreators/rankingActions';

export default function(state=null, action){
  switch(action.type) {
    // console.log('action received', action)
    case FETCH_RANKINGS:
    console.log('in rankings redeucersss!!!', '++==', action.payload.data)
     return [
      /* make a new array and put payload data in it and concat with state= state.concat([action.payload.data]);*/ action.payload.data, ...state]
  }

  return state;
}
