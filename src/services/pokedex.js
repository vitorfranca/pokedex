'use strict';

let request = require('./request'),
    store = require('../store'),
    config = require('../config');

module.exports = {
    get: () => request.get(`${config.POKEAPI_URL}pokedex/2`)
      .then((response) => response.data.pokemon_entries)
};
