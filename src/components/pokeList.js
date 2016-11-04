import React from 'react';
import R from 'ramda';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PokeCard from './pokeCard';

class PokeList extends React.Component {
  render() {
    const listStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    };

    let pokemonCards = R.map((pkmn) => <PokeCard key={pkmn.name} pokemon={pkmn} />
      , this.props.pokemon);

    return (
      <ul style={listStyle}>
        <ReactCSSTransitionGroup transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {pokemonCards}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

export default (PokeList);
