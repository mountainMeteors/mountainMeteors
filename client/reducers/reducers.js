import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.js'
import listings from './listings.js'
import surveysResponses from './surveysReducer.js';
import photoFiles from './photoReducer.js'



const rootReducer = combineReducers({
  auth, listings, 
photoFiles : photoFiles,
  surveysResponses: surveysResponses,
  routing: routerReducer
                                });


export default rootReducer;



