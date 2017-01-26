import React from 'react';

require('./Angel.scss')

class AngelList extends React.Component {
  render() {
    return (
      <div id="angels" className="content">
        <h3>{this.props.title}</h3>
        <p style={{textAlign:'center'}}>Add filter here ..........</p>
        <hr />
        <ul>
        {this.props.angels.map((angel, i) =>
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
