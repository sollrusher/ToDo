/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Filters from './filters';

export default class Footer extends Component {
  render() {
    const { length } = this.props;
    const {
      filter, onFilterSelect, deleteComplete, data,
    } = this.props;
    if (data[0]) {
      return (
        <div className="todo__footer">
          <div className="todo-footer__count">
            {length}
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
