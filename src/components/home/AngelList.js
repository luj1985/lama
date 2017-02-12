import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = require('../../styles/Angel.scss');
const COLUMNS = 6;

class AngelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter : () => true, active: 0 }
  }
  displayAll() {
    this.setState({ filter : () => true, active: 0  });
  }
  displayCondition1() {
    this.setState({ filter : d => d.condition === 1, active : 1 });
  }
  displayCondition2() {
    this.setState({ filter : d => d.condition === 2, active : 2 });
  }
  render() {
    const angels = this.props.angels.filter(this.state.filter),
          index = this.state.active;

    let filters = [
      { text: 'All', action: this.displayAll },
      { text: 'Condition 1', action: this.displayCondition1 },
      { text: 'Condition 2', action: this.displayCondition2 }
    ];

    const width = 100 / COLUMNS;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <div className={styles.filters}>{
          filters.map((d, i) => {
            let type = index === i ? 'selected' : 'normal';
            return (<button key={i} className={styles[type]} onClick={d.action.bind(this)}>{d.text}</button>)
          })}
        </div>
        <ReactCSSTransitionGroup
          component="div"
          className={styles.angels}
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}>{
            angels.map((angel, i) => {
              const left = (width * i) + '%';
              return (
                <div key={angel.url} className={styles.angel} style={{ left: left, width: width + '%' }}>
                  <a target="_blank" href={angel.url}>
                    <div className={styles.logo} style={{ 'backgroundImage' : 'url(' + angel.logo + ')'}}></div>
                    <h2>{angel.name}</h2>
                  </a>
                </div>
              )
            }
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default AngelList;
