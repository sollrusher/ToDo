/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'active', label: 'Активные' },
      { name: 'complete', label: 'Выполненные' },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const classname = active ? 'todo-footer__filters selected' : 'todo-footer__filters';
      return (
        <a
          href="#a"
          className={classname}
          key={name}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </a>
      );
    });

    return <div className="todo-footer__filters">{buttons}</div>;
  }
}

Filters.propTypes = {
  filter: PropTypes.func,
  onFilterSelect: PropTypes.func,
};
Filters.defaultProps = {
  filter: () => {},
  onFilterSelect: () => {},
};
