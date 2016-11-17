import React from 'react';
import R from 'ramda';
import PokeCard from './pokeCard';
import { TransitionMotion, spring, presets } from 'react-motion';

const springConfig = presets.gentle;

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: props.pokemon };
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

    return (
      <TransitionMotion
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        defaultStyles={R.map(pkmn => ({
          key: pkmn._id,
          data: pkmn,
          style: { opacity: 0, height: 0 }
        }), this.state.pokemon)}
        styles={R.map(pkmn => ({
          key: pkmn._id,
          data: pkmn,
          style: {
            opacity: spring(1, springConfig),
            height: spring(160, springConfig)
          }
        }), this.state.pokemon)}>

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
    );
  }
}

export default PokeList;
