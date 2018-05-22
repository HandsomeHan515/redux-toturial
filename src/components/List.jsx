import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  componentWillUpdate() {
    console.log(123);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string
}

List.defaultProps = {
  title: '111'
}

export default List;