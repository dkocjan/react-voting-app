import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className='ui menu'>
        <a className='item'>Browse</a>
        <a className='item'>Submit</a>
        <div className='right menu'>
          <a className='item'>Sign Up</a>
          <a className='item'>Help</a>
        </div>
      </div>
    );
  }
}

export default Menu;
