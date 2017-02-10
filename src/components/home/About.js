import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="content" style={{textAlign: 'center'}}>
        <h3>{this.props.title}</h3>
        <article dangerouslySetInnerHTML={{__html: this.props.description}}></article>
      </div>
    )
  }
}

export default About;
