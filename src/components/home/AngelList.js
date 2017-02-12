import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = require('../../styles/Angel.scss');

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

    let filters = [{
      text: 'All',
      action: this.displayAll
    }, {
      text: 'Condition 1',
      action: this.displayCondition1
    }, {
      text : 'Condition 2',
      action: this.displayCondition2
    }

    ];

    const items = angels.map((angel, i) =>
      <a className="angel" key={i} target="_blank" href={angel.url}>
        <div className="my-logo" style={{ 'backgroundImage' : 'url(' + angel.logo + ')'}}></div>
        <h4>{angel.name}</h4>
      </a>
    );
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
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default AngelList;
