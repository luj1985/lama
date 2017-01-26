import React from 'react';

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
              <h4>{person.name}</h4>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Team;
