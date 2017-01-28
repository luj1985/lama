// @flow

import React from 'react';
import Home from './components/Home';
import TeamDetails from './components/TeamDetails';
import NoMatch from './components/NoMatch';
import Press from './components/Press';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { smoothScroll } from './components/SmoothScroll';

function getNavigatorHeight() {
  var el = document.querySelector('#navbar');
  if (el) {
    // navigator header size can vary when scroll to different position
    //
    // var height = window.getComputedStyle(el).height;
    // return parseFloat(height, 10);
    return 84;
  }
  return 0;
}

function anchorScroll() {
  const { hash } = window.location;
  if (!!hash) {
    const id = hash.replace('#', '');
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = getNavigatorHeight();
        smoothScroll(el, { duration : 250, offset : -offset });
      }
    })
  }
}

render((
  <Router history={browserHistory} onUpdate={anchorScroll}>
    <Route path="/" component={Home}/>
    <Route path="/team/:name" components={TeamDetails} />
    <Route path="/presses(/:type)" components={Press} />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('app'));
