import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import R from 'ramda';

class PokeDetails extends React.Component {
  render() {
    const { selectedPokemon } = this.props;
    return (
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
      }}>
        {selectedPokemon.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPokemon: state.selectedPokemon
  };
}

export default connect(mapStateToProps)(PokeDetails);
