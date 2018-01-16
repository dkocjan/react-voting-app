import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemContent from './ItemContent';
import ItemImage from './ItemImage';

class Item extends PureComponent {
  render() {
    return (
      <div className="item">
        <ItemImage title={this.props.title} imgUrl={this.props.imgUrl} />
        <ItemContent
          id={this.props.id}
          title={this.props.title}
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  added: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Item;
