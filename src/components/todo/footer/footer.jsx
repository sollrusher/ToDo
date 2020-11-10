import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import memoizeOne from 'memoize-one';
import Filters from './filters';
import {
  setFilterAll,
  setFilterActive,
  setFilterComplete,
} from '../../../store/filter/filter.action';
import { deleteComplete } from '../../../store/todos/todos.action';

class Footer extends Component {
  calculateUnchecked = memoizeOne(
    (items) => items.filter((item) => !item.checked).length,
  );

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

          <div
            role="button"
            tabIndex={-1}
            className="todo-footer__clear"
            onClick={delComplete}
            onKeyDown={delComplete}
          >
            Очистить выполненные
          </div>
        </div>
      );
    }
    return '';
  }
}

const mapStateToProps = (store) => ({
  items: store.todos.todoItems,
  filter: store.filter.filterSelect,
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

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  delComplete: PropTypes.func.isRequired,
};
