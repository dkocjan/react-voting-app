import React, { Component } from 'react';
import ItemsList from './ItemsList';

class ItemsListContainer extends Component {
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
    }, 500);
  }

  render() {
    return <ItemsList items={this.state.items} loading={this.state.loading} />;
  }
}

export default ItemsListContainer;
