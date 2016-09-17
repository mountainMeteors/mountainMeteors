import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listings from './listings';
import comments from './comments';

const rootReducer = combineReducers({listings, comments, routing: routerReducer });

export default rootReducer;
