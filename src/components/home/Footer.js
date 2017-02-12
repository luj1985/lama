import React from 'react';

require('../../styles/Footer.scss')

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="content">
          <span>© 2017 Huiyin Blockchain Venture</span>
          <div className="social-media">
            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
