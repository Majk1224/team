import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './views/indexpage/IndexPage';
import List from './views/list/list'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
