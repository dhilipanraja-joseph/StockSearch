import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , browserHistory , IndexRoute} from 'react-router'


import App from './components/App'
import Welcome from './components/Welcome'
import StockFull from './components/StockFull'
import StockSearchForm from './components/StockSearchForm'


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="/StockSearchForm" component={StockSearchForm}/>
      <Route path="/stockFull" component={StockFull}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
