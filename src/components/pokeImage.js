import React, { Component } from 'react';
import R from 'ramda';

class PokeImage extends Component {
  imageStyle (size) {
    return {
      width: size || 96,
      height: size || 96,
      objectFit: 'contain'
    };
  }
  render () {
    const defaultImage = 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG';

    return (
      <div>
        { this.props.image ?
          <img src={this.props.image} style={this.imageStyle()} /> :
          <img src={defaultImage} style={{...this.imageStyle(), padding: 20}} /> }
      </div>
    );
  }
}

export default (PokeImage);
