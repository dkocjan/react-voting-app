import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  render() {
    return (
      <div className='item'>
        <div className="image">
          <img src='https://picsum.photos/640/480/?random' alt={ this.props.name } />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <Link to={ `/item/${this.props.name}` }>{ this.props.name }</Link>
            <p>{ this.props.description }</p>
          </div>
          <div className='extra'>
            <span>Submitted by: { this.props.author }</span>
            <Link to={`/user/${this.props.author}`}>
              <img
                src={`/public/images/avatars/${this.props.author.toLowerCase()}.jpg`}
                alt={ `${this.props.author} avatar` }
                className='ui avatar image'
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  name:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author:      PropTypes.string.isRequired,
};

export default Item;

