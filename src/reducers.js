'use strict';

import * as actions from './actions';
import R from 'ramda';

const getIdFromUrl = (url) => {
  return url.match(/http\:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d)\//)[1];
}

let reducer = (state = {}, action) => {
  let newState = (update, remove) => {
    let updatedState = Object.assign({}, state, update);
    const result = R.omit(remove || [], updatedState);
    return result;
  };

  switch(action.type) {
    case actions.GET_POKEDEX:
      return newState({
        pokemon: R.map((pkmn) => {
          return {
            ...pkmn,
            _id: getIdFromUrl(pkmn.url)
          };
        }, action.pokemon)
      });

    case actions.SELECT_POKEMON:
      return newState({ selectedPokemon: action.selectedPokemon });

    case actions.GET_POKEMON_DETAILS:
      const i = R.findIndex(R.propEq('name', action.details.name))(state.pokemon);
      const newPkmnList = R.adjust(R.merge(action.details))(i)(state.pokemon);
      return newState({ pokemon: newPkmnList });

    default:
      return state;
  }
};

export default reducer;
