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
      <a className="angel" key={i} target="_blank" href={angel.url}>
        <div className="my-logo" style={{ 'background-image' : 'url(' + angel.logo + ')'}}></div>
        <h4>{angel.name}</h4>
      </a>
    );
    return (
      <div className="content">
        <h3><span className="title">{this.props.title}</span></h3>
        <div className="angel-filters">
          <button className={index === 0 ? 'active' : ''} onClick={this.displayAll.bind(this)}>All</button>
          <button className={index === 1 ? 'active' : ''}  onClick={this.displayCondition1.bind(this)}>Condition 1</button>
          <button className={index === 2 ? 'active' : ''}  onClick={this.displayCondition2.bind(this)}>Condition 2</button>
        </div>
        <ReactCSSTransitionGroup
          component="div"
          className="list"
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
