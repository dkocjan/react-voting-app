import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ItemImage extends PureComponent {
  render() {
    return (
      <div className='image'>
        <img
          src={ `https://picsum.photos/670/500/?image=${this.props.img}` }
          alt={ this.props.name }
        />
      </div>
    );
  }
}

ItemImage.propTypes = {
  img:         PropTypes.number.isRequired,
  name:         PropTypes.string.isRequired,
};

export default ItemImage;
