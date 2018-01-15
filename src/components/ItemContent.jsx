import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemContent extends PureComponent {
  render() {
    return (
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
              src={ `/public/img/avatars/${this.props.author.toLowerCase()}.jpg` }
              alt={ `${this.props.author} avatar` }
              className='ui avatar image'
            />
          </Link>
          <div className='ui right floated left labeled button'>
            <a className='ui basic label'>{this.props.votes}</a>
            <div className='ui icon button'>
              <i className='thumbs up green icon' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ItemContent.propTypes = {
  id:          PropTypes.number.isRequired,
  name:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author:      PropTypes.string.isRequired,
  added:       PropTypes.string.isRequired,
  votes:       PropTypes.number.isRequired,
};

export default ItemContent;
