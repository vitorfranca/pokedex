'use strict';

// import { combineReducers } from 'redux';
import * as actions from '../actions';
import R from 'ramda';

let reducer = (state = {}, action) => {
  let newState = (update, remove) => {
    let updatedState = Object.assign({}, state, update);
    return R.omit(remove || [], updatedState);
  };

  switch(action.type) {
    case actions.GET_POKEDEX:
      return newState({ pokemon: action.pokemon });
    default:
      return state;
  }
};

export default reducer;
