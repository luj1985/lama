import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Icon} from 'react-fa'
import {browserHistory} from 'react-router';


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
  gotoDetail(person) {
    const link = '/team/' + person.identity;
    browserHistory.push(link);
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
          transitionEnterTimeout={0}
          transitionLeaveTimeout={300}>{
            team.map((person) => {
              const email = person.email || '';
              const position = email.indexOf('@');
              const name = email.substring(0, position);
              return (
                <div key={person.name} onClick={() => this.gotoDetail(person)} className={styles.member} style={{ width : width + '%' }}>
                  <div className={styles.person}>
                    <section className={styles.description} to={'/team/' + person.identity}>
                      <h2>{person.name}</h2>
                      <h3>{person.title}</h3>
                      <a href={'mailto:' + person.email}>
                        <span className={styles.icon}><Icon name="envelope" /></span>
                        <span>{name}</span>
                      </a>
                    </section>
                    <img src={person.avatar} />
                  </div>
                </div>
              )
            }
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Team;
