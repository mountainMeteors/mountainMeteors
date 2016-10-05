import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


import auth from './auth.js'
import listings from './listings.js'
import surveysResponses from './surveysReducer';




const rootReducer = combineReducers({
  auth, listings, formReducer,
  surveysResponses: surveysResponses,
  routing: routerReducer
                                });


export default rootReducer;