import React from 'react';

require('./Introduction.scss');

class Introduction extends React.Component {
  render() {
    return (
      <div id="intro">
        <div className="content">
          <h3>{this.props.title}</h3>
          <article dangerouslySetInnerHTML={{__html: this.props.description}}></article>
        </div>
      </div>
    )
  }
}

export default Introduction;
