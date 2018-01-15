import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends PureComponent {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default MyComponent;

