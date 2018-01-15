import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemContent from './ItemContent';
import ItemImage from './ItemImage';

class Item extends PureComponent {
  render() {
    return (
      <div className='item'>
        <ItemImage name={this.props.name} img={this.props.img} />
        <ItemContent
          className='middle aligned content'
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

