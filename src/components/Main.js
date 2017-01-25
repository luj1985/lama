require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Navigator from 'components/home/Navigator'
import Masthead from 'components/home/Masthead'
import AngelList from 'components/home/AngelList'
import Team from 'components/home/Team'
import Contact from 'components/home/Contact'
import Footer from 'components/home/Footer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navigator />
        <Masthead />
        <AngelList />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default AppComponent;
