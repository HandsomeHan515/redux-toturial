import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ad extends Component {
  render() {
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