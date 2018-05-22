import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../components';
import data from '../server';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data.list
    }
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <List title={list.a} />
        <List title={list.b} />
        <button onClick={() => {
          list.b = (parseInt(list.b, 10) + 111).toString();
          this.setState({ list })
        }}>更改数据</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(
  mapStateToProps
)(Home);