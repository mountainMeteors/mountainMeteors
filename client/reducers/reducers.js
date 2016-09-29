import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user.js'
import listings from './listings.js'
import rankingsReducers from './rankings'

const rootReducer = combineReducers({
  user, listings,
  rankings: rankingsReducers,
  routing: routerReducer
                                });

export default rootReducer;
