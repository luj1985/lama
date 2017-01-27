import React from 'react';
import { Link } from 'react-router'

let NAVIGATOR_HEIGHT = 64;

require('./Navigator.scss');

class Navigator extends React.Component {
  constructor() {
    super()
    this.state = { style : 'normal' }
  }
  componentDidMount() {
    this.resizeNavigator = function() {
      var offset = window.pageYOffset;
      var style = (offset > NAVIGATOR_HEIGHT) ? 'active' : 'normal';
      this.setState({ style : style });
    }.bind(this);
    window.addEventListener('scroll', this.resizeNavigator);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.resizeNavigator);
  }
  render() {
    return (
      <section id="navbar" className={this.state.style}>
        <header>
          <div className="content">
            <div id="logo">
              <svg width="64px" height="64px">
                <path d="
                M 32,0 A 32,32 0 0 1 32,64 A 32,32 0 0 1 32,0 Z
                M 52.50609665440987,52.50609665440987 A 29,29 0 0 0 32,3 Z
                M 32,3 A 29,29 0 0 0 11.493903345590123,52.50609665440987 Z
                M 11.493903345590123,52.50609665440987 A 29,29 0 0 0 52.50609665440987,52.50609665440987
                L 32,42.25304832720494 Z">
                </path>
              </svg>
              <h1>Huiyin Blockchain Venture</h1>
            </div>
            <ul className="menu" role="nav">
              {this.props.modules.map((m, i) => {
                return (
                  <li key={i}>
                    <Link to={m.href}>{m.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </header>
      </section>
    )
  }
}

export default Navigator;
