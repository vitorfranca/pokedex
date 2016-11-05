'use strict';

import request from './services/request';
import pokedex from './services/pokedex';

export const GET_POKEDEX = 'GET_POKEDEX';
export const SELECT_POKEMON = 'SELECT_POKEMON';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';

export function getPokedex() {
  return (dispatch) => {
    return pokedex.get().then((pokemon) => {
      return dispatch({
        type: GET_POKEDEX,
        pokemon
      });
    });
  };
};

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    selectedPokemon: pokemon
  };
};

export function getPokemonDetails(pokemon) {
  return (dispatch) => {
    return request.get(pokemon.url).then((result) => {
      return dispatch({
        type: GET_POKEMON_DETAILS,
        details: result.data
      });
    });
  }
};
