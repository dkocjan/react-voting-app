import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ItemsLoading from './ItemsLoading';
import SortButtons from './SortButtons';
import SearchItems from './SearchItems';

class ItemList extends PureComponent {
  render() {
    return (
      <div className="ui bottom attached segment divided items">
        <div className="item">
          <div className="ui secondary menu" style={{ width: `${100}%` }}>
            <SearchItems handleSearchItems={this.props.handleSearchItems} />
            <SortButtons handleSortItems={this.props.handleSortItems} />
          </div>
        </div>

        {this.props.loading ? (
          <ItemsLoading />
        ) : (
          this.props.items.map(item => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              author={item.author}
              added={item.added}
              votes={item.votes}
              imgUrl={item.imgUrl}
            />
          ))
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleSortItems: PropTypes.func.isRequired,
  handleSearchItems: PropTypes.func.isRequired,
};

export default ItemList;
