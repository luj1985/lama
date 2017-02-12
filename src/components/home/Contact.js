import React from 'react';

require('./Contact.scss')

class Contact extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    window.alert('send site message');
  }
  render() {
    return (
      <section {...this.props} className="content">
        <h3><span className="title">{this.props.title}</span></h3>
        <div id="site-message">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea rows="10" placeholder="Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;
