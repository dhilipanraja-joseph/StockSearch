import React, { Component } from 'react'
import StockSearchForm from './StockSearchForm'
import ShowResult from './ShowResult'
import StockFull from './StockFull'
import NavLink from './NavLink'
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Stock search App</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Welcome</NavLink></li>
          <li><NavLink to="/StockSearchForm">Search</NavLink></li>
        </ul>
        {this.props.children || Welcome}
      </div>
    )
  }
}
