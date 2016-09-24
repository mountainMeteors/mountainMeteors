import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers.js'

const login = [];

const defaultState = {
  login
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
