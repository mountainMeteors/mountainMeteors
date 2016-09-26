import {createStore, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js'

import listings from '../data/listings';

const defaultState = {
  listings: listings
}

const store = createStore(rootReducer, defaultState);

console.log('store', store);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
