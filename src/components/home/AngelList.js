import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

require('./Angel.scss')

class AngelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleStyle : 'before-animate'
    }
  }
  onChange(isVisible) {
    if (isVisible) {
      this.setState({ visibleStyle : 'animated fadeInUp' });
    }
  }
  getVisibleStyle() {
    return this.state.isVisible ? 'animated fadeInUp' : 'before-animate';
  }
  render() {
    return (
      <VisibilitySensor
        scrollCheck
        scrollDelay={50}
        minTopValue={10}
        onChange={this.onChange.bind(this)}>
        <section id="angels" className={this.state.visibleStyle}>
          <div className="content">
            <h3>Angel List</h3>
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
        </section>
      </VisibilitySensor>
    )
  }
}

export default AngelList;
