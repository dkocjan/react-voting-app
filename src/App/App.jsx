import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

const NotFoundFallback = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ NotFoundFallback } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
