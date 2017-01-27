import React from 'react';

require('./Masthead.scss')

export default class Masthead extends React.Component {
  render() {
    return (
      <section id="masthead" style={{backgroundImage: `url(${this.props.background})`}}>
        <h2>{this.props.title}</h2>
      </section>
    )
  }
}
