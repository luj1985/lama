import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default class fadeSection extends React.Component {
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
    const base = this.props.dark ? 'section dark ' : 'section';
    return (
      <VisibilitySensor
        scrollCheck
        scrollDelay={50}
        minTopValue={50}
        partialVisibility = {true}
        onChange={this.onChange.bind(this)}>
        <section className={this.state.isVisible ? (base + ' animated fade') : (base + ' before-animate')}>
        {this.props.children}
        </section>
      </VisibilitySensor>
    )
  }
}
