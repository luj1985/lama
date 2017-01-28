// @flow

import React from 'react';
import Home from './components/Home';
import TeamDetails from './components/TeamDetails';
import NoMatch from './components/NoMatch';
import Press from './components/Press'
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

function anchorScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    console.log(hash);
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}
render((
  <Router history={browserHistory} onUpdate={anchorScroll}>
    <Route path="/" component={Home}/>
    <Route path="/team/:name" components={TeamDetails} />
    <Route path="/presses" components={Press} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('app'));
