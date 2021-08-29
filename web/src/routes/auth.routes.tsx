import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/rgister" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
