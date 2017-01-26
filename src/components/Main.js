require('styles/App.scss');

import React from 'react';
import Navigator from 'components/home/Navigator';
import Masthead from 'components/home/Masthead';
import Introduction from 'components/home/Introduction';
import AngelList from 'components/home/AngelList';
import Team from 'components/home/Team';
import Contact from 'components/home/Contact';
import Footer from 'components/home/Footer';
import FadeInUpSection from './FadeInUpSection';

let angels = {
  title : 'Angel List',
  angels: [
    { name: 'Purse.io', url: 'https://purse.io', logo: '/images/angel-logos/purse.jpg'},
    { name: 'Yours network', url: 'https://www.yours.network', logo: '/images/angel-logos/yours.jpg'},
    { name: 'Unocoin', url: 'https://www.unocoin.com', logo: '/images/angel-logos/unocoin.jpg'},
    { name: 'BitPagos', url: 'https://www.bitpagos.com/', logo: '/images/angel-logos/bitpagos.png'},
    { name: 'PopChest', url: 'https://popchest.com/', logo: '/images/angel-logos/popchest.png'},
    { name: 'Bitso', url: 'https://bitso.com/', logo: '/images/angel-logos/bitso.png'}
  ]
};

let intro = {
  title : 'Introduction',
  description: `<p>Huiyin Blockchain Venture is a premier firm that partners with innovative start-ups and entrepreneurs to help
  them grow and define the future of the blockchain economy. We provide strategic investment to bring pioneering
  blockchain technology ideas to life and to scale in a number of areas, including infrastructure, exchange, payment,
  remittance or use cases. We are a trusted partner with the global expertise and network to make the most of the
  exciting opportunities that blockchain technology presents.</p>
  <p>Huiyin Blockchain Venture builds upon the strength of its parent company, the Huiyin Group (www.huiyin.com),
  which was established in 2001. Huiyin Group manages diversified investments in commerce, energy, medicine, agriculture,
  tourism, electronics, chemicals, commerce and food and beverages. Huiyin Group has more than 20 subsidiaries,
  assets of over $2 billion and more than 1,000 employees.</p>`
}

let team = {
  title : 'Team',
  team : [{
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
}

let contactUs = {
  title : 'Contact Us'
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navigator />
        <Masthead />
        <FadeInUpSection>
          <Introduction {...intro} />
        </FadeInUpSection>
        <FadeInUpSection>
          <AngelList {...angels} />
        </FadeInUpSection>
        <FadeInUpSection>
          <Team {...team}/>
        </FadeInUpSection>
        <FadeInUpSection>
          <Contact {...contactUs}/>
        </FadeInUpSection>
        <Footer />
      </div>
    );
  }
}

export default AppComponent;
