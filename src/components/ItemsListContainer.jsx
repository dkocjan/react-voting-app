import React, { Component } from 'react';
import ItemsList from './ItemsList';

class ItemsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true,
    };

    this.handleSortItems = this.handleSortItems.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('/public/items.json')
        .then(res => res.json())
        .then(items => this.setState({ items, loading: false }))
        .catch();
    }, 800);
  }

  // todo
  handleSortItems() {
    // todo
    this.setState({
      items: this.state.items.sort((a, b) => b.votes - a.votes),
    });
  }
  // todo
  handleSearchItems() {
    // todo
    this.setState({
      items: this.state.items.sort((a, b) => b.votes - a.votes),
    });
  }

  render() {
    return (
      <ItemsList
        items={this.state.items}
        loading={this.state.loading}
        handleSortItems={this.handleSortItems}
        handleSearchItems={this.handleSearchItems}
      />
    );
  }
}

export default ItemsListContainer;
