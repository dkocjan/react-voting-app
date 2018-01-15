import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  
  const;
  
  render() {
    return (
      <div className='item'>
        <div className="image">
          <img
            src={ `https://picsum.photos/670/500/?image=${this.props.img}` }
            alt={ this.props.name }
          />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <Link to={ `/item/${this.props.id}/${this.props.name}` }>{ this.props.name }</Link>
          </div>
          <div className='meta'>
            <span className='stay'>{ this.props.added }</span>
          </div>
          <div className='description'>
            <p>{ this.props.description }</p>
          </div>
          <div className='extra'>
            <Link to={ `/user/${this.props.author}` }>
              <span>Author: { this.props.author } </span>
              <img
                src={ `/public/images/avatars/${this.props.author.toLowerCase()}.jpg` }
                alt={ `${this.props.author} avatar` }
                className='ui avatar image'
              />
            </Link>
            <div className='ui right floated labeled button'>
              <div className='ui button'>
                <i className='heart red icon' />
              </div>
              <a className='ui basic left pointing label'>{this.props.votes} likes</a>
            </div>
          </div>
        </div>
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

