import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import LoginAdmin from '../pages/LoginAdmin';
import Company from '../pages/Company';
import Form from '../pages/Form';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={LoginAdmin} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/company" component={Company} />
      <Route path="/form" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
