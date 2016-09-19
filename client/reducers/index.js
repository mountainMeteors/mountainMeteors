import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listings from './listings';
import user from './user';
import survey from './survey';

const rootReducer = combineReducers({listings, survey, user, routing: routerReducer });

export default rootReducer;
