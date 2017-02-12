import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div {...this.props} className="content" style={{textAlign: 'center'}}>
        <h3><span className="title">{this.props.title}</span></h3>
        <article dangerouslySetInnerHTML={{__html: this.props.description}}></article>
      </div>
    )
  }
}

export default About;
