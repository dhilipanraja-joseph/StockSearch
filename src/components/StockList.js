import React,{ Component } from 'react'
import StockActions from '../actions/StockActions'
import NavLink from './NavLink'
import StockFull from './StockFull'

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
        <i>{Name} </i>: <NavLink onClick={this.getFullStockInfo} to="/stockFull">{Symbol}</NavLink> <br/>
      </div>
    )
  }
}
