import React, { Component } from 'react';
import { connect } from 'react-redux';
import PouchDB from 'pouchdb-browser';
import R from 'ramda';

let pouch = new PouchDB('pokedex');

let db = ({ pokemon }) => {
  pouch.bulkDocs(this.props.pokemon, (err, res) => {
    if(err) console.error('PouchDB::', err);
    else console.info('PouchDB::', res);
  });
};

export function getPokedex() {
  return pouch.allDocs({
    include_docs: true,
    attachments: true
  }).then(function (result) {
    return R.pluck('doc', result.rows);
  }).catch(function (err) {
    console.log(err);
  });
}

const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
}

export default connect(mapStateToProps)(db);
