import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className='ui bottom attached segment items'>
        <Item
          id={3}
          name='Post Test 3'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad corporis culpa deleniti dolores doloribus ipsa nam nisi odio veniam? Ab asperiores aut cum deleniti facere numquam omnis repellendus unde. Accusantium enim laudantium, minima officia quia sequi vel vitae voluptates. Alias aperiam cumque et impedit itaque laboriosam odit quidem sapiente...'
          author='Elliot'
          added='15.01.2018, 19:42'
          votes={ 135 }
          img={33}
        />
        <Item
          id={2}
          name='React Is Awesome!'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad corporis culpa deleniti dolores doloribus ipsa nam nisi odio veniam? Ab asperiores aut cum deleniti facere numquam omnis repellendus unde. Accusantium enim laudantium, minima officia quia sequi vel vitae voluptates. Alias aperiam cumque et impedit itaque laboriosam odit quidem sapiente...'
          author='Daniel'
          added='15.01.2018, 19:40'
          votes={ 29 }
          img={2}
        />
        <Item
          id={1}
          name='First Post Ever'
          description='First!'
          author='Daniel'
          added='01.01.2018, 12:34'
          votes={ 1234 }
          img={11}
        />
      </div>
    );
  }
}

export default ItemList;
