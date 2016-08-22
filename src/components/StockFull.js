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
    // if (this.state.fullstock === {}){
    //   return (
    //     <div>
    //
    //     </div>
    //   )
    // }
    let { Name , LastPrice , Timestamp , MarketCap , Volume , High , Low , Open} = this.state.fullstock;
    return (
      <div>
       <br/>
        <h3>Full Stock Info</h3>

          <p>Company : <i>{Name}</i></p>
          <p>Market Cap : <i>{MarketCap}</i></p>
          <p>High : <i>{High}</i></p>
          <p>Low : <i>{Low}</i></p>
          <p>Open : <i>{Open}</i></p>
          <p>LastPrice : <i>{LastPrice}</i></p>
          <p>Volume : <i>{Volume}</i></p>
          <p>Updated At : <i>{Timestamp}</i></p>

      </div>
    )
  }
}
