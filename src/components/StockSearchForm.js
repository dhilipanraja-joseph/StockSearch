import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import StockFull from './StockFull'


export default class StockSearchForm extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
    this.changeSearchInput = this.changeSearchInput.bind(this);
    this.submit = this.submit.bind(this);
  }
  changeSearchInput(e){
    let search = e.target.value.toUpperCase();
    this.setState({ search });
  }

  submit(e) {
    e.preventDefault();
    let { search } = this.state;
    StockActions.getStock(search);
    //console.log('search:',search);

  }

  render() {
    return (
      <div>
          <form onSubmit={this.submit}>
            <input type="text" value={this.state.search} onChange={this.changeSearchInput} placeholder="Enter Company symbol"/>
            <button type="submit">Search</button>
          </form>
        </div>
    )
  }
}
