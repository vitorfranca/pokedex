import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { TransitionMotion, spring, presets } from 'react-motion';
import R from 'ramda';
import * as actions from '../actions';
import PokeCard from './pokeCard';

const springConfig = presets.gentle;

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: props.pokemon };
  }

  loadMore() {
    console.log('loadMore');
    return this.props.dispatch(actions.getPokedex());
  }

  filter(props) {
    const filterFn = R.curry((pkmn) => {
      const filter = props.filter || '';
      return pkmn.name.toLowerCase().includes(filter);
    });

    this.setState({
      pokemon: R.filter(filterFn, props.pokemon)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.filter.bind(this)(nextProps);
  }

  render() {
    return (
      <InfiniteScroll
        loadMore={this.loadMore.bind(this)}
        pageStart={0}
        hasMore={true}
        loader={<img style={{height: 100, width: '100%', objectFit: 'contain'}} src="img/mew_loading.gif" />}
        threshold={500}>

        <PokemonAnimatedList pokemon={this.state.pokemon} />

      </InfiniteScroll>
    );
  }
}


class PokemonAnimatedList extends React.Component {
  willEnter(config) {
    return {
      opacity: 0,
      height: 0
    };
  }
  willLeave(config) {
    return {
      opacity: spring(0, springConfig),
      height: spring(0, springConfig)
    };
  }
  render() {
    const listStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    };

    return <TransitionMotion
      willEnter={this.willEnter}
      willLeave={this.willLeave}
      defaultStyles={R.map(pkmn => ({
        key: pkmn._id,
        data: pkmn,
        style: { opacity: 0, height: 0 }
      }), this.props.pokemon || [])}
      styles={R.map(pkmn => ({
        key: pkmn._id,
        data: pkmn,
        style: {
          opacity: spring(1, springConfig),
          height: spring(160, springConfig)
        }
      }), this.props.pokemon || [])}>

      { (interpolatedStyles) =>
        <ul style={listStyle}>
          { R.map(config => {
              const { data, style, key } = config;
              return (
                <li style={style} key={key}>
                  <PokeCard pokemon={data} />
                </li>
              );
            }, interpolatedStyles)
          }
        </ul>
      }
    </TransitionMotion>
  }
}



const mapStateToProps = (state) => {
  return {
    pokemon: R.propOr([], 'pokemon')(state),
    filter: state.filter
  };
}

export default connect(mapStateToProps)(PokeList);
