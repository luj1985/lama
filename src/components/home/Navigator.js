import React from 'react';
import { Link } from 'react-router'

let NAVIGATOR_HEIGHT = 64;

const LOGO_SIZE = 48;

const styles = require('../../styles/Navigator.scss');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `${this.x},${this.y}`;
  }
}

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    if (props.active) {
      this.state = { style : 'active' };
    } else {
      this.state = { style : 'normal' };
      let resizeNavigator = this.resizeNavigator.bind(this);
      this.componentDidMount = () => {
        window.addEventListener('scroll', resizeNavigator);
      }
      this.componentWillUnmount = () => {
        window.removeEventListener('scroll', resizeNavigator);
      };
    }
  }
  resizeNavigator() {
    var offset = window.pageYOffset;
    var style = (offset > NAVIGATOR_HEIGHT) ? 'active' : 'normal';
    this.setState({ style : style });
  }
  generateLogo(diameter, border) {
    let radius = diameter / 2,
        inner = radius - border,
        offset = inner / Math.sqrt(2),
        c1 = new Point(radius, radius),
        c2 = new Point(inner, inner),
        r1 = new Point(radius, 0),
        r2 = new Point(radius, diameter),
        p1 = new Point(radius, border),
        p2 = new Point((radius + offset), (radius + offset)),
        p3 = new Point((radius - offset), (radius + offset)),
        p4 = new Point(radius, (radius + offset / 2));

    return `M ${r1} A ${c1} 0 0 1 ${r2} A ${c1} 0 0 1 ${r1} Z
            M ${p2} A ${c2} 0 0 0 ${p1} Z
            M ${p1} A ${c2} 0 0 0 ${p3} Z
            M ${p3} A ${c2} 0 0 0 ${p2} L ${p4} Z`;
  }
  render() {
    const type = this.state.style;
    return (
      <section id="navbar" className={styles[type]}>
        <header className="container">
          <div className={styles.logo}>
            <svg width={LOGO_SIZE} height={LOGO_SIZE}>
              <path d={this.generateLogo(LOGO_SIZE, 2)} />
            </svg>
            <h1>Huiyin Blockchain Venture</h1>
          </div>
          <ul className={styles.menu} role="nav">
          {this.props.modules.map((m, i) => {
            return (
              <li key={i}>
                <Link to={m.href}>{m.title}</Link>
              </li>
            )
          })}
          </ul>
        </header>
      </section>
    )
  }
}
