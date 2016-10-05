import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



import auth from './auth.js'
import listings from './listings.js'
import scraper from './scraper.js';
import surveysResponses from './surveysReducer';
import userPrefs from './userPrefs';



const rootReducer = combineReducers({
  auth: auth,
  listings: listings,
  surveysResponses: surveysResponses,
  scraper: scraper,
  userPrefs: userPrefs,
  routing: routerReducer
});


export default rootReducer;
