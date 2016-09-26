import {createStore, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js'

const user = [];

const defaultState = {
  user
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));



export const history = syncHistoryWithStore(browserHistory, store);
export default store;
