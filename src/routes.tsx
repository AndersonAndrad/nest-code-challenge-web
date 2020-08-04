import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// components or modules
// all your components is here
import Home from './app/modules/home/pages/home';
import Message from './app/modules/message/message';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/messages" exact component={Message} />
      </Switch>
    </BrowserRouter>
  );
}
