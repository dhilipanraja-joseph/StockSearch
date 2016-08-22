import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import StockStore from '../stores/StockStore'

export default class ShowResult extends Component{
  constructor(){
    super();

    this.state={
      stockInfo : StockStore.getStockInfo(),
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
    this.setState({stockInfo : StockStore.getStockInfo()});
  }

  render(){
    let stocInfo = this.state.stocInfo;
    return (
      <div>
        <h3>Company Name : {stocInfo.Name}</h3>
        
      </div>
    )
  }
}
