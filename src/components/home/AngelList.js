import React from 'react';

require('./Angel.scss')

class AngelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter : () => true }
  }
  displayAll() {
    this.setState({ filter : () => true });
  }
  displayCondition1() {
    this.setState({ filter : d => d.condition === 1 });
  }
  displayCondition2() {
    this.setState({ filter : d => d.condition === 2 });
  }
  render() {
    var angels = this.props.angels.filter(this.state.filter);
    return (
      <div id="angels" className="content">
        <h3>{this.props.title}</h3>
        <div className="angel-filters">
          <button onClick={this.displayAll.bind(this)}>All</button>
          <button onClick={this.displayCondition1.bind(this)}>Condition 1</button>
          <button onClick={this.displayCondition2.bind(this)}>Condition 2</button>
        </div>
        <ul>
        {angels.map((angel, i) =>
          <li className="angel" key={i}>
            <img src={angel.logo} />
            <a target="_blank" href={angel.url}>{angel.name}</a>
          </li>
        )}
        </ul>
      </div>
    )
  }
}

export default AngelList;
