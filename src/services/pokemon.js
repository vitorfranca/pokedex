'use strict';

let request = require('./request'),
    store = require('../store'),
    config = require('../config');

module.exports = {
    get: (id) => request.get(`${config.POKEAPI_URL}pokemon/${id}`)
};
