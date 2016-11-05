import React, { Component } from 'react';
import { connect } from 'react-redux';
import PouchDB from 'pouchdb-browser';
import R from 'ramda';

// import reducers from '../reducers';
// import { createStore } from 'redux';
// let store = createStore(reducers);
// console.log(store.getState());

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
    console.log('result', result);
    return R.pluck('doc', result.rows);
  }).catch(function (err) {
    console.log(err);
  });
}

// class DB extends Component {
//   render () {
//     pouch.bulkDocs(this.props.pokemon));
//     return (<span></span>);
//   }
// }

const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
}

export default connect(mapStateToProps)(db);
