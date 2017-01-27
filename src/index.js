// @flow

import React from 'react';
import Home from './components/Home';
import TeamDetails from './components/TeamDetails';
import NoMatch from './components/NoMatch';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/team/:name" components={TeamDetails} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('app'));
