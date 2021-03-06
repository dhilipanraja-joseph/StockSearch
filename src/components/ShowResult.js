import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import StockStore from '../stores/StockStore'
import StockList from './StockList'

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
    //let stocInfo = this.state.stocInfo;
    if (this.state.stockInfo.length == 0){
      return (<div></div>)
    }else{
        const StockItems = this.state.stockInfo.map(info=>{
          return (
            <StockList {...info}/>
          )
        });
        return (
          <div>
          <h3>Companies Found</h3>
          {StockItems}
          </div>
        )
      }

    }
}
