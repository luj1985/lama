require('styles/App.scss');

import React from 'react';
import Layout from './Layout'
import Masthead from 'components/home/Masthead';
import About from 'components/home/About';
import AngelList from 'components/home/AngelList';
import Team from 'components/home/Team';
import Contact from 'components/home/Contact';
import FadeInUpSection from './FadeInUpSection';

let masthead = {
  title : 'Huiyin Blockchain Venture',
  background : '/images/background.jpg'
}
let angels = {
  title : 'Angel List',
  angels: [
    { name: 'Purse.io',       condition: 2, url: 'https://purse.io',          logo: '/images/angel-logos/purse.jpg'},
    { name: 'Yours network',  condition: 1, url: 'https://www.yours.network', logo: '/images/angel-logos/yours.jpg'},
    { name: 'Unocoin',        condition: 2, url: 'https://www.unocoin.com',   logo: '/images/angel-logos/unocoin.jpg'},
    { name: 'BitPagos',       condition: 1, url: 'https://www.bitpagos.com/', logo: '/images/angel-logos/bitpagos.png'},
    { name: 'PopChest',       condition: 1, url: 'https://popchest.com/',     logo: '/images/angel-logos/popchest.png'},
    { name: 'Bitso',          condition: 1, url: 'https://bitso.com/',        logo: '/images/angel-logos/bitso.png'}
  ]
};

let intro = {
  title : 'About',
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
    identity: 'James_Wo',
    title: 'President, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/James_Wo.jpg',
    avatar: '/images/avatars/James_Wo.jpg'
  }, {
    name: 'William Hou',
    identity: 'William_Hou',
    title: 'CEO, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/William_Hou.jpg',
    avatar: '/images/avatars/William_Hou.jpg'
  }, {
    name: 'Freddy Zheng',
    identity: 'Freddy_Zheng',
    title: 'VP, Management Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Freddy_Zhang.jpg',
    avatar: '/images/avatars/Freddy_Zhang.jpg'
  }, {
    name: 'Shang Zhang',
    identity: 'Shang_Zhang',
    title: 'Senior Associate, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Shang_Zhang.jpg',
    avatar: '/images/avatars/Shang_Zhang.jpg'
  }, {
    name: 'Daphne Zhang',
    identity: 'Daphne_Zhang',
    title: 'Senior Associate, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Daphne_Zhang.jpg',
    avatar: '/images/avatars/Daphne_Zhang.jpg'
  }, {
    name: 'Rose Gao',
    identity: 'Rose_Gao',
    title: 'Associate, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Rose_Gao.jpg',
    avatar: '/images/avatars/Rose_Gao.jpg'
  }, {
    name: 'Amy Zhu',
    identity: 'Amy_Zhu',
    title: 'HR, Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Amy_Zhu.jpg',
    avatar: '/images/avatars/Amy_Zhu.jpg'
  }, {
    name: 'Andrew Lee',
    identity: 'Andrew_Lee',
    title: 'CEO at Purse, Advisor at Huiyin Blockchain Venture',
    thumb: '/images/thumbs/Andrew_Lee.jpg',
    avatar: '/images/avatars/Andrew_Lee.jpg'
  }]
}

let contactUs = {
  title : 'Contact Us'
}

class HomeComponent extends React.Component {
  // TODO: move model fetch into AJAX call
  constructor(props) {
    super(props);
    this.state = {
      masthead, angels, intro, team, contactUs
    }
  }
  render() {
    return (
      <Layout>
        <Masthead id="masthead" {...this.state.masthead} />
        <FadeInUpSection id="about">
          <About {...this.state.intro} />
        </FadeInUpSection>
        <FadeInUpSection id="angels" dark>
          <AngelList {...this.state.angels} />
        </FadeInUpSection>
        <FadeInUpSection id="teams">
          <Team {...this.state.team}/>
        </FadeInUpSection>
        <FadeInUpSection id="contacts">
          <Contact {...this.state.contactUs}/>
        </FadeInUpSection>
      </Layout>
    );
  }
}

export default HomeComponent;
