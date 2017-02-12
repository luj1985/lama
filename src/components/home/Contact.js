import React from 'react';
import {Icon} from 'react-fa'

const styles = require('../../styles/Contact.scss')

class Contact extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    window.alert('send site message');
  }
  render() {
    return (
      <section className="container">
        <h1>{this.props.title}</h1>
        <div className={styles.content}>
          <div className={styles.message}>
            <h2>Write Us</h2>
            <form className={styles['contact-form']} onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea rows="10" placeholder="Message" />
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
          <div className={styles.contact}>
            <h2>We are here</h2>
            <ul>
              <li><a href="#"><span className={styles.icon}><Icon name="home" /></span>Shanghai</a></li>
              <li><a href="#"><span className={styles.icon}><Icon name="map-marker" /></span>Some where</a></li>
              <li><a href="#"><span className={styles.icon}><Icon name="phone" /></span>123-456-789</a></li>
              <li><a href="#"><span className={styles.icon}><Icon name="envelope" /></span>123-456-789</a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
