import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default class FadeInUpSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible : false }
  }
  onChange(isVisible) {
    if (isVisible) {
      this.setState({ isVisible : true });
    }
  }
  render() {
    return (
      <VisibilitySensor
        scrollCheck
        scrollDelay={50}
        minTopValue={50}
        partialVisibility = {true}
        onChange={this.onChange.bind(this)}>
        <section {...this.props} className={this.state.isVisible ? 'section animated fadeInUp' : 'section before-animate'}>
        {this.props.children}
        </section>
      </VisibilitySensor>
    )
  }
}
