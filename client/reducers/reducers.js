import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.js'
import listings from './listings.js'
import surveysResponses from './surveysReducer'
import userPrefs from './userPrefs'



const rootReducer = combineReducers({
  auth,
  listings,
  surveysResponses: surveysResponses,
  userPrefs,
  routing: routerReducer,
});


export default rootReducer;
