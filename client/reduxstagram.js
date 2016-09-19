import React from 'react';

import { render } from 'react-dom';

// Import css


// Import Components
import App from './components/App';
import Single from './components/Single';
import Listing from './components/Listing';
import Grid from './components/Grid';
import Survey from './components/Survey';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Listing}></IndexRoute>
        <IndexRoute component={Grid}></IndexRoute>

        <Route path="/view/:listingId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
