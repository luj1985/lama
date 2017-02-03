import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('./Angel.scss')

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

    const items = angels.map((angel, i) =>
      <li className="angel" key={i}>
        <a target="_blank" href={angel.url}>
          <img src={angel.logo} />
          <h4>{angel.name}</h4>
        </a>
      </li>
    );
    return (
      <div className="content">
        <h3>{this.props.title}</h3>
        <div className="angel-filters">
          <button className={index === 0 ? 'active' : ''} onClick={this.displayAll.bind(this)}>All</button>
          <button className={index === 1 ? 'active' : ''}  onClick={this.displayCondition1.bind(this)}>Condition 1</button>
          <button className={index === 2 ? 'active' : ''}  onClick={this.displayCondition2.bind(this)}>Condition 2</button>
        </div>
        <ReactCSSTransitionGroup
          component="ul"
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
