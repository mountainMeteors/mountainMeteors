import React from 'react';

import { render } from 'react-dom';

// Import css
import styles from './styles/style.css';

// Import Components
import App from './components/App';
import Single from './components/Single';
import Listing from './components/Listing';
import Welcome from './components/Welcome';
import Add from './components/Add';
import GridSearch from './components/GridSearch';
import Survey from './components/Survey';
import DropdownMenu from './components/DropdownMenu';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Listing}></IndexRoute>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/add" component={Add}></Route>
        <Route path="/survey" component={Survey}></Route>
      </Route>
    </Router>
  </Provider>
)

// <IndexRoute component={Mainview}></IndexRoute>

render(router, document.getElementById('root'));
