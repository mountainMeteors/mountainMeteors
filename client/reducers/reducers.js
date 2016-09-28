import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth.js'
import listings from './listings.js'

const rootReducer = combineReducers({auth, listings, routing: routerReducer});

export default rootReducer;
