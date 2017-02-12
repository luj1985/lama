import React from 'react';
import {Icon} from 'react-fa'

const styles = require('../../styles/Footer.scss')

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <span>© 2017 Huiyin Blockchain Venture</span>
          <div className={styles.social}>
            <a href="#"><Icon name="linkedin" /></a>
            <a href="#"><Icon name="facebook" /></a>
            <a href="#"><Icon name="twitter" /></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
