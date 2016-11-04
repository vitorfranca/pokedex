'use strict';

import pokedex from './services/pokedex';

export const GET_POKEDEX = 'GET_POKEDEX';

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
