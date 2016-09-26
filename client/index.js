import React from 'react';
import {render} from 'react-dom';

import App from './App';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store/store';

const router = (
  <Provider store={store}>
   <Router history={history}>
    <Route path="/" component={App}/>
   </Router>
  </Provider>
)

render(router, document.getElementById('root'));
