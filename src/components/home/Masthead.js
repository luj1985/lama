import React from 'react';

const styles = require('../../styles/Masthead.scss')

export default class Masthead extends React.Component {
  render() {
    return (
      <section {...this.props}
        className={styles.masthead}
        style={{backgroundImage: `url(${this.props.background})`}}>
        <h2>{this.props.title}</h2>
      </section>
    )
  }
}
