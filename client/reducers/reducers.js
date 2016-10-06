import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



import auth from './auth.js'
import listings from './listings.js'
import surveysResponses from './surveysReducer';




const rootReducer = combineReducers({
  auth: auth,
  listings: listings, 
  surveysResponses: surveysResponses,
  routing: routerReducer
                                });


export default rootReducer;
