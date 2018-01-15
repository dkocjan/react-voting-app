import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return (
      <div>
        Item List
        <Item name='test1' />
        <Item name='test2' />
        <Item name='test3' />
      </div>
    );
  }
}

export default ItemList;
