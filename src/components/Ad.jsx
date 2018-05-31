import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Ad extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('this props: %o, next props: %o, next state: %o', this.props, nextProps, nextState)
  //   return this.props.name === nextProps.name;
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

Ad.propTypes = {
  name: PropTypes.string
}

Ad.defaultProps = {
  name: '111'
}

export default Ad;