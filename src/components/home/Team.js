import React from 'react';
import { Link } from 'react-router';

const styles = require('../../styles/Team.scss')

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : (d) => d.identity !== 'Andrew_Lee',
      active : 0
    };
  }
  selectOurTeam() {
    this.setState({
      filter: (d) => d.identity !== 'Andrew_Lee',
      active: 0
    });
  }
  selectAdvisors() {
    this.setState({
      filter: (d) => d.identity === 'Andrew_Lee',
      active: 1
    });
  }
  render() {
    const team = this.props.team.filter(this.state.filter);

    return (
      <div className="container">
        <h1>{this.props.title}</h1>

        <ul className="team-filter">
          <li className={this.state.active === 0 ? 'active' : ''}>
            <a onClick={this.selectOurTeam.bind(this)}>Our team</a>
          </li>
          <li className={this.state.active === 1 ? 'active' : ''}>
            <a onClick={this.selectAdvisors.bind(this)}>Board Advisors</a>
          </li>
        </ul>

        <div className={styles.team}>
          {team.map((person, i) =>
            <div key={i} className={styles.person}>
              <Link className={styles.description} to={'/team/' + person.identity}>
                <h2>{person.name}</h2>
                <h3>{person.title}</h3>
              </Link>
              <img src={person.avatar} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Team;
