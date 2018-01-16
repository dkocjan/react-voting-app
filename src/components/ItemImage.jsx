import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ItemImage extends PureComponent {
  render() {
    return (
      <div className="image">
        <img src={this.props.imgUrl} alt={this.props.name} />
      </div>
    );
  }
}

ItemImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ItemImage;
