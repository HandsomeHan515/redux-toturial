import React, { Component } from 'react';

import * as actionTypes from '../actions';

class Flower extends Component {
  componentDidMount() {
    console.log(123);
    actionTypes.fetchFlowers();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Flower;