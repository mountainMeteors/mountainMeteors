import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listings from './listings';
import survey from './survey';

const rootReducer = combineReducers({listings, survey, routing: routerReducer });

export default rootReducer;
