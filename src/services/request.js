'use strict';

let axios = require('axios'),
  Q = require('bluebird'),
  config = require('../config'),
  store = require('../store');

const request = axios.create({
  baseURL: config.POKEAPI_URL,
  timeout: 10000
});

request.defaultResponse = (reqPromise) => {
  return new Q((resolve, reject) => {
    reqPromise
        .then((result) => resolve(result && result.data))
        .catch(reject);
  });
};

module.exports = request;
