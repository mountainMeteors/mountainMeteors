import { FETCH_RESPONSES } from '../actionCreators/surveysActions';

const INITIAL_STATE = { all: [], surveyResponses:null };

export default function(state=[], action){
    console.log('action received!!!!!!')
  switch(action.type) {
    case 'FETCH_RESPONSES':
    console.log('reducer data', action.payload.data);
    // console.log('in surveyResponses redeucersss!!!*******',  action.payload.data)
     return { ...state, all: action.payload.data }
    //  return Object.assign([], state,  action.payload.data)
  default:
  return state;
  }
}