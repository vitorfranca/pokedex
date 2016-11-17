import React, { Component } from 'react';
import R from 'ramda';

const getIdFromUrl = (url) => {
  return url.match(/http\:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\//)[1];
}

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
    const id = this.props.pokemon.id || getIdFromUrl(this.props.pokemon.url);
    return (
      <div>
        <img src={`img/${id}.png`} style={this.imageStyle()} />
      </div>
    );
  }
}

export default (PokeImage);
