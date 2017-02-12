import React from 'react';
import { Link } from 'react-router'

let NAVIGATOR_HEIGHT = 64;

const styles = require('../../styles/Navigator.scss');

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
  render() {
    const style = this.state.style;
    return (
      <section {...this.props} className={styles[style]}>
        <header>
          <div className={styles.logo}>
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
