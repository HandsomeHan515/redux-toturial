import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Ad } from '../components';
import data from '../server';
import { store } from '../index';
import { updateAd, delAd, createAd } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data.list
    }
  }

  handleClick = index => {
    let { ads } = this.props;
    ads[index].name = (parseInt(ads[index].name, 10) + 111).toString();
    store.dispatch(updateAd(ads[index]));
  }

  handleClickDelete = item => {
    store.dispatch(delAd(item));
  }

  handleClickCreate = () => {
    let length = this.props.ads.length + 1;
    let payload = {
      id: length,
      name: (length * 111).toString()
    }
    store.dispatch(createAd(payload));
  }

  render() {
    const { list } = this.state;
    const { ads } = this.props;

    return (
      <div>
        <List title={list.a} />
        <List title={list.b} />
        <button onClick={() => {
          list.b = (parseInt(list.b, 10) + 111).toString();
          this.setState({ list })
        }}>更改数据</button>
        <div>
          <button onClick={this.handleClickCreate}>新建</button>
          {
            ads.map((item, index) => {
              return (
                <div key={item.id} >
                  <Ad name={item.name} />
                  <button onClick={() => this.handleClick(index)}>编辑</button>
                  <button onClick={() => this.handleClickDelete(item)}>删除</button>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    list: state.list,
    ads: state.ads
  }
}

export default connect(
  mapStateToProps
)(Home);