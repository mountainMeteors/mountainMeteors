import React from 'react';

import { render } from 'react-dom';

// Import css
import styles from './styles/style.css';

// Import Components
import App from './components/App';
import Listing from './components/MainView/Listing';
import Welcome from './components/Welcome/Welcome';
import Add from './components/Add/Add';
import GridSearch from './components/Survey/GridSearch';
import SurveyList from './components/SurveyList/SurveyList';
import MainView from './components/MainView/MainView';
import DropdownMenu from './components/Survey/DropdownMenu';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainView}></IndexRoute>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/add" component={Add}></Route>
        <Route path="/survey" component={DropdownMenu}></Route>
        <Route path="/results" component={SurveyList} />
      </Route>
    </Router>
  </Provider>
)

// <IndexRoute component={Mainview}></IndexRoute>

render(router, document.getElementById('root'));
