import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './ItemList';
import Menu from './Menu';

const NotFoundFallback = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className='main ui text container'>
      <Menu />
      <Switch>
        <Route exact path="/" component={ ItemList } />
        <Route component={ NotFoundFallback } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
