import React from 'react';
import Navigator from './home/Navigator';
import Footer from './home/Footer';

let modules = [{
  title : 'Home',
  href : '/'
}, {
  title : 'Intro',
  href : '/#introduction'
}, {
  title : 'Angel List',
  href : '/#angels'
}, {
  title : 'Team',
  href : '/#teams'
}, {
  title : 'Contact',
  href : '/#contacts'
}, {
  title : 'Press',
  href : '/presses'
}];

export default class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navigator modules={modules}/>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
