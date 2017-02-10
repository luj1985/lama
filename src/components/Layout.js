import React from 'react';
import Navigator from './home/Navigator';
import Footer from './home/Footer';

let modules = [{
  title : 'Home',
  href : '/#masthead'
}, {
  title : 'About',
  href : '/#about'
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
    // detail page doesn't have any background image/color
    // mark navigator with dark color, otherwise the menu item is invisible
    let isDetailPage = !!this.props.detail;
    return (
      <div className="wrapper">
        <Navigator active={isDetailPage} modules={modules}/>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
