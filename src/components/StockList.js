import React,{ Component } from 'react'

export default class StockList extends Component{
  constructor(){
    super();
    this.getFullStockInfo = this.getFullStockInfo.bind(this);
  }
  getFullStockInfo(e){
    console.log(e.target);
  }
  render(){
    let { Symbol ,Name } = this.props;
    //console.log(itemId[0]);
    return(
      <div>
        <br/><br/>
        <p>{Name} : <span onClick={this.getFullStockInfo}>{Symbol}</span></p>

      </div>
    )
  }
}
