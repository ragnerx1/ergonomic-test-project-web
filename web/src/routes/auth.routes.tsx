import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import DiscompfortMap from '../pages/DiscompfortMap';
import GetInfoUser from '../pages/GetInfoUser';
import UserForm from '../pages/UserForm';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import LoginAdmin from '../pages/LoginAdmin';
import Company from '../pages/Company';
import Form from '../pages/Form';
import Questions from '../pages/Questions';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={LoginAdmin} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/company" component={Company} />
      <Route path="/form" component={Form} />
      <Route path="/questions" component={Questions} />
      <Route path="/user-form" component={UserForm} />
      <Route path="/user-info" component={GetInfoUser} />
      <Route path="/discomfort-map" component={DiscompfortMap} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
