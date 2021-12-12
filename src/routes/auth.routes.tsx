import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home } from '../modules/Home';
import { ERoutes } from '../dtos/routes';
import DiscomfortMap from '../pages/DiscomfortMap';
import GetInfoUser from '../pages/GetInfoUser';
import UserForm from '../pages/UserForm';
import { Login } from '../modules/Login';
import { Users } from '../modules/Users';
import { Company } from '../modules/Company';
import { Forms } from '../modules/Forms';
import Questions from '../pages/Questions';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ERoutes.LOGIN_USER} exact component={Login} />
      <Route path={ERoutes.HOME} component={Home} />
      <Route path={ERoutes.USERS} component={Users} />
      <Route path={ERoutes.COMPANY} component={Company} />
      <Route path={ERoutes.FORM} component={Forms} />
      <Route path={ERoutes.QUESTION} component={Questions} />
      <Route path={ERoutes.USER_FORM} component={UserForm} />
      <Route path={ERoutes.USER_INFO} component={GetInfoUser} />
      <Route path={ERoutes.DISCOMFORT_MAP} component={DiscomfortMap} />
    </Switch>
  </BrowserRouter>
);
