import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchItems extends PureComponent {
  render() {
    return (
      <div className="item" style={{ width: `${50}%` }}>
        <div className="ui icon input">
          <input placeholder="Search..." type="text" onChange={this.props.handleSearchItems} />
          <i className="search link icon" />
        </div>
      </div>
    );
  }
}

SearchItems.propTypes = {
  handleSearchItems: PropTypes.func.isRequired,
};

export default SearchItems;
