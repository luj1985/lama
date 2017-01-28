import React from 'react';
import { Link } from 'react-router';

require('./Team.scss')

class Team extends React.Component {
  render() {
    return (
      <div className="content">
        <h3>{this.props.title}</h3>
        <div className="team">
          {this.props.team.map((person, i) =>
            <div key={i} className="person">
              <img src={person.thumb} />
              <h4><Link to={'/team/' + person.identity}>{person.name}</Link></h4>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Team;
