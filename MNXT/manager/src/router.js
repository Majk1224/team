import React from 'react';
import Home from './views/Home'
import {Router, Route, Switch } from 'dva/router';
import IndexPage from './views/indexpage/IndexPage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/home' component={Home}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
