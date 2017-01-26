require('styles/App.scss');

import React from 'react';
import Navigator from 'components/home/Navigator';
import Masthead from 'components/home/Masthead';
import Introduction from 'components/home/Introduction';
import AngelList from 'components/home/AngelList';
import Team from 'components/home/Team';
import Contact from 'components/home/Contact';
import Footer from 'components/home/Footer';

let angels = [
  { name: 'Purse.io', url: 'https://purse.io', logo: '/images/angel-logos/purse.jpg'},
  { name: 'Yours network', url: 'https://www.yours.network', logo: '/images/angel-logos/yours.jpg'},
  { name: 'Unocoin', url: 'https://www.unocoin.com', logo: '/images/angel-logos/unocoin.jpg'},
  { name: 'BitPagos', url: 'https://www.bitpagos.com/', logo: '/images/angel-logos/bitpagos.png'},
  { name: 'PopChest', url: 'https://popchest.com/', logo: '/images/angel-logos/popchest.png'},
  { name: 'Bitso', url: 'https://bitso.com/', logo: '/images/angel-logos/bitso.png'}
];

let team = [{
  name: 'James Wo',
  title: 'President, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/James_Wo.jpg'
}, {
  name: 'William Hou',
  title: 'CEO, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/William_Hou.jpg'
}, {
  name: 'Freddy Zheng',
  title: 'VP, Management Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Freddy_Zhang.jpg'
}, {
  name: 'Shang Zhang',
  title: 'Senior Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Shang_Zhang.jpg'
}, {
  name: 'Daphne Zhang',
  title: 'Senior Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Daphne_Zhang.jpg'
}, {
  name: 'Rose Gao',
  title: 'Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Rose_Gao.jpg'
}, {
  name: 'Amy Zhu',
  title: 'HR, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Amy_Zhu.jpg'
}, {
  name: 'Andrew Lee',
  title: 'CEO at Purse, Advisor at Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Andrew_Lee.jpg'
}]

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navigator />
        <Masthead />
        <Introduction />
        <AngelList angels={angels} />
        <Team team={team}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default AppComponent;
