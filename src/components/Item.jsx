import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemImage from './ItemImage';
import ItemContent from './ItemContent';

class Item extends PureComponent {
  render() {
    return (
      <div className='item'>
        <ItemImage className="image" img={this.props.img} />
        <ItemContent
          id={this.props.id}
          name={this.props.name}
          description={this.props.description}
          author={this.props.author}
          added={this.props.added}
          votes={this.props.votes}
        />
      </div>
    );
  }
}

Item.propTypes = {
  id:          PropTypes.number.isRequired,
  name:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author:      PropTypes.string.isRequired,
  added:       PropTypes.string.isRequired,
  votes:       PropTypes.number.isRequired,
  img:         PropTypes.number.isRequired,
};

export default Item;

