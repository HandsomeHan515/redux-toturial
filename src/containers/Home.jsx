import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Ad } from '../components';
import data from '../server';
import { store } from '../index';
import { updateAd, delAd } from '../actions';

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

  handleClickDelete = index => {
    store.dispatch(delAd(index))
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
          {
            ads.map((item, index) => {
              return (
                <div key={item.id} >
                  <Ad name={item.name} />
                  <button onClick={() => this.handleClick(index)}>编辑</button>
                  <button onClick={() => this.handleClickDelete(index)}>删除</button>
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
  return {
    list: state.list,
    ads: state.ads
  }
}

export default connect(
  mapStateToProps
)(Home);