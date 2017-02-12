import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = require('../../styles/Team.scss')
const COLUMNS = 3;

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
    const filters = [{
      text : 'Our team',
      action : this.selectOurTeam
    }, {
      text : 'Board Advisors',
      action : this.selectAdvisors
    }];

    const width = 100 / COLUMNS;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>

        <ul className={styles.filters}>{
          filters.map((d, i) => {
            const type = this.state.active === i ? 'selected' : 'normal';
            return (
              <li key={i} className={styles[type]}>
                <a onClick={d.action.bind(this)}>{d.text}</a>
              </li>
            )
          })}
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          className={styles.angels}
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
          {team.map((person, i) =>
            <div key={i} className={styles.member} style={{ width : width + '%' }}>
              <div className={styles.person}>
                <Link className={styles.description} to={'/team/' + person.identity}>
                  <h2>{person.name}</h2>
                  <h3>{person.title}</h3>
                </Link>
                <img src={person.avatar} />
              </div>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Team;
