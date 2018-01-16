import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SortButtons extends PureComponent {
  render() {
    return (
      <div className="right menu">
        <div className="item">
          <div className="ui basic icon buttons">
            <button className="ui button" onClick={this.props.handleSortItems}>
              <i className="sort alphabet ascending icon" />
            </button>
            <button className="ui button">
              <i className="sort alphabet descending icon" />
            </button>
            <button className="ui button">
              <i className="sort numeric ascending icon" />
            </button>
            <button className="ui button">
              <i className="sort numeric descending icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

SortButtons.propTypes = {
  handleSortItems: PropTypes.func.isRequired,
};

export default SortButtons;
