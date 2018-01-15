import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ItemImage extends PureComponent {
  render() {
    return (
      <img
        src={ `https://picsum.photos/670/500/?image=${this.props.img}` }
        alt={ this.props.name }
      />
    );
  }
}

ItemImage.propTypes = {
  img:         PropTypes.number.isRequired,
};

export default ItemImage;
