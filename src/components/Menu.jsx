import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className='ui menu'>
    <Link to='' className='item'>Browse</Link>
    <Link to='/submit' className='item'>Submit</Link>
    <div className='right menu'>
      <Link to='/signup' className='item'>Sign Up</Link>
      <Link to='/help' className='item'>Help</Link>
    </div>
  </div>
);

export default Menu;
