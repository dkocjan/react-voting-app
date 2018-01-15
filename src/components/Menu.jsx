import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className='ui top attached tabular menu'>
    <Link to='' className='active item'>Browse</Link>
    <Link to='/submit' className='item'>Submit</Link>
    <div className='right menu'>
      <div className='item'>
        <div className='ui icon input'>
          <input placeholder='Search...' type='text' />
          <i className='search link icon' />
        </div>
      </div>
      <Link to='/signup' className='item'>Sign Up</Link>
    </div>
  </div>
);

export default Menu;
