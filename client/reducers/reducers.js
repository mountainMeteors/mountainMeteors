import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



import auth from './auth.js'
import listings from './listings.js'
import surveysResponses from './surveysReducer';
import photoFiles from './photoReducer'



const rootReducer = combineReducers({
  auth, listings, photoFiles, 
  surveysResponses: surveysResponses,
  routing: routerReducer
                                });


export default rootReducer;