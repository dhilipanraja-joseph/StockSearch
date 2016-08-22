import React,{ Component } from 'react'
import StockActions from '../actions/StockActions'

export default class StockList extends Component{
  constructor(){
    super();
    this.getFullStockInfo = this.getFullStockInfo.bind(this);
  }
  getFullStockInfo(e){
    //console.log(e.target.innerHTML);
    let search = e.target.innerHTML;
    StockActions.getFullStockInfo(search);
  }
  render(){
    let { Symbol ,Name } = this.props;
    //console.log(itemId[0]);
    return(
      <div>
        <br/>
        <p>{Name} : <span onClick={this.getFullStockInfo}>{Symbol}</span></p>
      </div>
    )
  }
}
