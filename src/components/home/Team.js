import React from 'react';

require('./Team.scss')

class Team extends React.Component {
  render() {
    return (
      <section className="content">
        <h3>Team</h3>
        <div className="team">
          {this.props.team.map((person, i) =>
            <div key={i} className="person">
              <img src={person.thumb} />
              <h4>{person.name}</h4>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Team;
