/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import memoizeOne from 'memoize-one';
import Filters from './filters';
import {
  deleteComplete, setFilterAll, setFilterActive, setFilterComplete,
} from '../../redux/actions';

class Footer extends Component {
  calculateUnchecked = memoizeOne((items) => items.filter((item) => !item.checked).length)

  render() {
    const {
      filter, onFilterSelect, items, delComplete,
    } = this.props;

    const unchecked = this.calculateUnchecked(items);

    if (items.length) {
      return (
        <div className="todo__footer">
          <div className="todo-footer__count">
            {unchecked}
            {' '}
            items left
          </div>

          <Filters filter={filter} onFilterSelect={onFilterSelect} />

          <div role="button" tabIndex={-1} className="todo-footer__clear" onClick={delComplete}>
            Очистить выполненные
          </div>
        </div>
      );
    }
    return '';
  }
}

const mapStateToProps = (store) => ({
  items: store.todos,
  filter: store.filter,
});

const mapDispatchToProps = (dispatch) => ({
  delComplete: () => dispatch(deleteComplete()),
  onFilterSelect: (name) => {
    if (name === 'all') dispatch(setFilterAll());
    if (name === 'active') dispatch(setFilterActive());
    if (name === 'complete') dispatch(setFilterComplete());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
