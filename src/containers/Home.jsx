import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, Ad, Header, Flower } from '../components';
import data from '../server';
import { store } from '../index';
import { updateAd, delAd, createAd, fetchFlowers } from '../actions';

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
    this.props.createAd(payload);
  }

  componentDidMount() {
    this.props.fetchFlowers()
  }


  render() {
    const { list } = this.state;
    const { ads } = this.props;

    return (
      <div>
        <Header />
        <div style={{ marginTop: 100 }}>
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

        <Flower />
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createAd,
    fetchFlowers
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);