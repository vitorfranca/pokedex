import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styles from './filter.css';
class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter: '' };
  }

  filter(filter) {
    this.setState({ filter: filter });
    this.props.dispatch(actions.filter(filter));
  }

  handleChange(e) {
    const filter = e.target.value.toLowerCase();
    this.filter(filter);
  }

  render() {
    const handleChange = this.handleChange.bind(this);

    return (<div className={styles.filterContainer}>
      <input type='text'
        className={styles.filterInput}
        onChange={handleChange}
        value={this.state.filter} />
    </div>);
  }
}

export default connect()(Filter);
