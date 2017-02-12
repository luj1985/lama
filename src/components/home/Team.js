import React from 'react';
import { Link } from 'react-router';

require('./Team.scss')

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
      <div className="content">
        <h3><span className="title">{this.props.title}</span></h3>

        <ul className="team-filter">
          <li className={this.state.active === 0 ? 'active' : ''}>
            <a onClick={this.selectOurTeam.bind(this)}>Our team</a>
          </li>
          <li className={this.state.active === 1 ? 'active' : ''}>
            <a onClick={this.selectAdvisors.bind(this)}>Board Advisors</a>
          </li>
        </ul>

        <div className="team">
          {team.map((person, i) =>
            <div key={i} className="person">
              <Link className="description" to={'/team/' + person.identity}>
                <h3>{person.name}</h3>
                <h4>{person.title}</h4>
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
