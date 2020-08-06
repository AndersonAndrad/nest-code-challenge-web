import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// components or modules
// all your components is here
import Home from './app/modules/home/pages/home';
import Login from './app/modules/login/pages/login.component';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/messages" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
