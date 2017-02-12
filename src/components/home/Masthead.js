import React from 'react';

const styles = require('../../styles/Masthead.scss')

export default class Masthead extends React.Component {
  render() {
    return (
      <section
        id = {this.props.id || 'masthead'}
        className={styles.masthead}
        style={{backgroundImage: `url(${this.props.background})`}}>
        <h1>{this.props.title}</h1>
      </section>
    )
  }
}
