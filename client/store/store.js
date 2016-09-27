import {createStore, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/reducers.js'
import ReduxPromise from 'redux-promise';

// import listings from '../data/listings';

const defaultState = {
}

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

const store = createStore(rootReducer, defaultState, applyMiddleware(ReduxPromise));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
