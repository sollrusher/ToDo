/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Filters from './filters';
import { connect } from 'react-redux';
import memoizeOne from 'memoize-one';
import {deleteComplete} from '../../redux/actions';

class Footer extends Component {
  calculateUnchecked = memoizeOne(item => item.filter((item) => !item.checked).length)
  render() {
    const {
      filter, onFilterSelect, deleteComplete, items,
    } = this.props;

       const unchecked = this.calculateUnchecked(items)

    if (items.length) {
      return (
        <div className="todo__footer">
          <div className="todo-footer__count">
            {unchecked}
            {' '}
            items left
          </div>

          <Filters filter={filter} onFilterSelect={onFilterSelect} />

          <div role="button" tabIndex={-1} className="todo-footer__clear" onClick={deleteComplete}>
            Очистить выполненные
          </div>
        </div>
      );
    }
    return '';
  }
}


const mapStateToProps = store => {
  return {
    items: store.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComplete: ()=> dispatch(deleteComplete())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
