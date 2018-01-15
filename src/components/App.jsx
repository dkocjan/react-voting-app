import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemList from './ItemList';
import Menu from './Menu';

const NotFoundFallback = () => <div className='ui bottom attached segment'>404</div>;

const App = () => (
  <BrowserRouter>
    <div className='main ui text container'>
      <Menu />
      <Switch>
        <Route exact path='/' component={ ItemList } />
        <Route component={ NotFoundFallback } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
