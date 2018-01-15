import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className='ui bottom attached segment'>
        Item List
        <Item name='test1' description='lorem ipsum...' author='Daniel' />
        <Item name='test1' description='lorem ipsum...' author='Elliot' />
        <Item name='test1' description='lorem ipsum...' author='Stevie' />
      </div>
    );
  }
}

export default ItemList;
