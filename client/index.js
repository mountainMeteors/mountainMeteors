import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import MainView from './components/MainView/MainView';
import Welcome from './components/Welcome/Welcome';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store/store';

import css from './styles/style.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainView}/>
        <Route path="/welcome" component={Welcome}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
