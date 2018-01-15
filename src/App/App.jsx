import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

const NotFoundFallback = () => <h1>404</h1>;

const App = () => (
  <div className='main ui text container'>
    <h1 className="ui dividing centered header">Voting App</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ NotFoundFallback } />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
