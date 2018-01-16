import React, { Component } from 'react';
import Item from './Item';
import ItemsLoading from './ItemsLoading';

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('/public/items.json')
        .then(res => res.json())
        .then(items => this.setState({ items, loading: false }))
        .catch();
    }, 100);
  }

  render() {
    return (
      <div className="ui bottom attached segment divided items">
        {this.state.loading ? <ItemsLoading className="ui segment" /> : ''}
        {this.state.items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            author={item.author}
            added={item.added}
            votes={item.votes}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    );
  }
}

export default ItemList;
