import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

require('./Introduction.scss');

class Introduction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleStyle : 'before-animate'
    }
  }
  onChange(isVisible) {
    if (isVisible) {
      this.setState({ visibleStyle : 'animated fadeInUp' });
    }
  }
  getVisibleStyle() {
    return this.state.isVisible ? 'animated fadeInUp' : 'before-animate';
  }
  render() {
    return (
      <VisibilitySensor
        scrollCheck
        scrollDelay={50}
        minTopValue={10}
        intervalDelay={8000}
        onChange={this.onChange.bind(this)}>
        <section id="intro" className={this.state.visibleStyle}>
          <div className="content">
            <h3>Introduction</h3>
            <article>
              <p>Huiyin Blockchain Venture is a premier firm that partners with innovative start-ups and entrepreneurs to help
              them grow and define the future of the blockchain economy. We provide strategic investment to bring pioneering
              blockchain technology ideas to life and to scale in a number of areas, including infrastructure, exchange, payment,
              remittance or use cases. We are a trusted partner with the global expertise and network to make the most of the
              exciting opportunities that blockchain technology presents.</p>
              <p>Huiyin Blockchain Venture builds upon the strength of its parent company, the Huiyin Group (www.huiyin.com),
              which was established in 2001. Huiyin Group manages diversified investments in commerce, energy, medicine, agriculture,
              tourism, electronics, chemicals, commerce and food and beverages. Huiyin Group has more than 20 subsidiaries,
              assets of over $2 billion and more than 1,000 employees.</p>
            </article>
          </div>
        </section>
      </VisibilitySensor>
    )
  }
}

export default Introduction;
