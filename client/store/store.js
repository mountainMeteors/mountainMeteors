import {createStore, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js'
import ReduxPromise from 'redux-promise';

import listings from '../data/listings';

const defaultState = {
  listings: listings
}

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(rootReducer);


let store = createStore(rootReducer, defaultState, applyMiddleware(ReduxPromise), window.devToolsExtension && window.devToolsExtension());


console.log('store', store);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
