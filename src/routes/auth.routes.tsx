import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { ERoutes } from '../dtos/routes';
import DiscomfortMap from '../pages/DiscomfortMap';
import GetInfoUser from '../pages/GetInfoUser';
import UserForm from '../pages/UserForm';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { Users } from '../modules/Users';
import { Company } from '../modules/Company';
import LoginAdmin from '../pages/LoginAdmin';
import Form from '../pages/Form';
import Questions from '../pages/Questions';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ERoutes.LOGIN_USER} exact component={Login} />
      <Route path={ERoutes.LOGIN_ADMIN} component={LoginAdmin} />
      <Route path={ERoutes.HOME} component={Home} />
      <Route path={ERoutes.USERS} component={Users} />
      <Route path={ERoutes.COMPANY} component={Company} />
      <Route path={ERoutes.FORM} component={Form} />
      <Route path={ERoutes.QUESTION} component={Questions} />
      <Route path={ERoutes.USER_FORM} component={UserForm} />
      <Route path={ERoutes.USER_INFO} component={GetInfoUser} />
      <Route path={ERoutes.DISCOMFORT_MAP} component={DiscomfortMap} />
    </Switch>
  </BrowserRouter>
);
