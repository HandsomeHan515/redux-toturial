import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('this props: %o, next props: %o, next state: %o', this.props, nextProps, nextState)
    if (this.props.title === nextProps.title) {
      return false;
    } else {
      return true;
    }
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