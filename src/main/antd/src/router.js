import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import myLayout from './routes/Layout';
import upleftLayout from './routes/Up_Left_Layout';
import WrappedNormalLoginForm from './routes/LoginPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
      <Route path="/login" component={WrappedNormalLoginForm}/>
      <Route path="/left" component={myLayout}>
        {/*<IndexRoute path="/index" component={myLayout}/>*/}
        {/*<Route path="/layout" component={myLayout}/>*/}
      </Route>
      <Route path="/upleft" component={upleftLayout}>
        {/*<IndexRoute path="/index" component={myLayout}/>*/}
        {/*<Route path="/layout" component={myLayout}/>*/}
      </Route>
    </Router>
  );
}

export default RouterConfig;
