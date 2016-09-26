import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user.js'
import listings from './listings.js'

const rootReducer = combineReducers({user, listings, routing: routerReducer});

export default rootReducer;
