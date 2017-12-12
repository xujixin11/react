/**
 * 2017-11-27 Xu Jixin
 */
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './components/BasicLayout';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={BasicLayout} />
        <Route path="/b" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
