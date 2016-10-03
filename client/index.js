import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import MainView from './components/MainView/MainView';
import RankingSlider from './components/Rankings/RankingSlider'

/*TEST with Multi-select*/
import MultiSelect from './components/Rankings/Multi_Select';
import Survey from './components/Rankings/Survey'



import RankingDisplay from './components/Rankings/RankingDisplay'
import Welcome from './components/Welcome/Welcome';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store/store';
import css from './styles/style.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainView} />
        <Route path="survey" component={RankingSlider} />
        <Route path="profile" component={RankingDisplay} />
        <Route path="welcome" component={Welcome}/>
        <Route path="select" component={MultiSelect}/>

        <Route path="surveytest" component={Survey}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
