import React from 'react';

require('./Contact.scss')

class Contact extends React.Component {
  render() {
    return (
      <section className="content">
        <h3>{this.props.title}</h3>
        <div id="contact">
          <div id="site-message">
            <form>
              <input type="text" placeholder="Title" />
              <textarea rows="10" placeholder="Submit your content here" />
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
