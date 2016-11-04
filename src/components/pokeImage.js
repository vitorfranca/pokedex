import React, { Component } from 'react';
import R from 'ramda';

class PokeImage extends Component {
  render () {
    const style = {
      // backgroundColor: 'white',
      width: '96px',
      height: '96px',
      objectFit: 'contain'
    };

    return (
      <div>
        <img src={this.props.image} style={style} />
      </div>
    );
  }
}

export default (PokeImage);
