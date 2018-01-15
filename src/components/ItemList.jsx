import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>
        Item List
        <Item name='test1' description='lorem ipsum...' author='Daniel' />
      </div>
    );
  }
}

export default ItemList;
