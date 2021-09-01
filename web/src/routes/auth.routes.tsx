import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Import from '../pages/Import';
import LoginAdmin from '../pages/LoginAdmin';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={LoginAdmin} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/import" component={Import} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
