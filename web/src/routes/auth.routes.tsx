import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import LoginAdmin from '../pages/LoginAdmin';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={LoginAdmin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
