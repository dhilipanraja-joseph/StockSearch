import React, { Component } from 'react';
import StockActions from '../actions/StockActions'
import StockStore from '../stores/StockStore'

export default class StockFull extends Component {
  constructor(){
    super();
    this.state={
      fullstock : StockStore.getFullStockInfo()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({fullstock : StockStore.getFullStockInfo()});
  }
  render(){
    return (
      <div>
        Full Stock Info
        {JSON.stringify(this.state.fullstock)}
      </div>
    )
  }
}
