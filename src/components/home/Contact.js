import React from 'react';

require('./Contact.scss')

class Contact extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
  }
  render() {
    return (
      <section className="content">
        <h3>{this.props.title}</h3>
        <div id="site-message">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Title" />
            <textarea rows="10" placeholder="Submit your content here" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;
