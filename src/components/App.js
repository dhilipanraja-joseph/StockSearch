import React, { Component } from 'react'
import StockSearchForm from './StockSearchForm'

export default class App extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h1 className="text-center">Stock search App</h1>
        <StockSearchForm/>
      </div>
    )
  }
}
