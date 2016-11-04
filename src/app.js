import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import R from 'ramda';

import PokeList from './components/pokeList';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.getPokedex());
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <PokeList pokemon={pokemon} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pokemon: R.propOr([], 'pokemon')(state) };
}

export default connect(mapStateToProps)(App);
