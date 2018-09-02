// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home';
import NotFound from 'pages/notfound';

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
