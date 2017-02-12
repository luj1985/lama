import React from 'react';

const styles = require('../../styles/About.scss');

class About extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>{this.props.title}</h1>
        <article dangerouslySetInnerHTML={{__html: this.props.description}}></article>
      </div>
    )
  }
}

export default About;
