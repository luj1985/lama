import React from 'react';

require('./Navigator.scss')

class Navigator extends React.Component {
  constructor() {
    super()
    this.state = {
      style : 'normal'
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      var offset = window.pageYOffset;
      var style = (offset > 64) ? 'active' : 'normal';
      this.setState({ style : style });
    });
  }
  render() {
    return (
      <section id="navbar" className={this.state.style}>
        <header>
          <div className="content">
            <div id="logo">
              <svg width="64px" height="64px">
                <path d="M 32,0 A 32,32 0 0 1 32,64 A 32,32 0 0 1 32,0 Z
                M 52.50609665440987,52.50609665440987 A 29,29 0 0 0 32,3 Z
                M 32,3 A 29,29 0 0 0 11.493903345590123,52.50609665440987 Z
                M 11.493903345590123,52.50609665440987 A 29,29 0 0 0 52.50609665440987,52.50609665440987
                L 32,42.25304832720494 Z">
                </path>
              </svg>
              <h1>Huiyin Blockchain Venture</h1>
            </div>
            <ul className="menu">
              <li>Home</li>
              <li>Intro</li>
              <li>Angel List</li>
              <li>Team</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
        </header>
      </section>
    )
  }
}

export default Navigator;
