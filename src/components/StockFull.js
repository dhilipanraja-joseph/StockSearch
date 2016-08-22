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
    if (this.state.fullstock === {}){
      return (
        <div>

        </div>
      )
    }
    let { Name , LastPrice , Timestamp , MarketCap , Volume , High , Low , Open} = this.state.fullstock;
    return (
      <div>
       <br/>
        <p>Full Stock Info</p>

          <p>Company : {Name}</p>
          <p>Market Cap : {MarketCap}</p>
          <p>High : {High}</p>
          <p>Low : {Low}</p>
          <p>Open : {Open}</p>
          <p>LastPrice : {LastPrice}</p>
          <p>Volume : {Volume}</p>
          <p>Updated At : {Timestamp}</p>

      </div>
    )
  }
}
