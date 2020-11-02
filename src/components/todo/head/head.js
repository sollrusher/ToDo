/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Head extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    const { onAdd } = this.props;
    if (event.key === 'Enter') {
      onAdd(event.target.value);
      const temp = event;
      temp.target.value = '';
    }
  }

  render() {
    const { setAllToComplete } = this.props;

    return (
      <div className="todo__head">
        <button type="button" className="todo__head-checkall" onClick={setAllToComplete}>
          ❯
        </button>
        <input
          type="text"
          placeholder="Введите то что вам нужно сделать"
          className="todo__head-input"
          onKeyPress={this.onValueChange}
        />
      </div>
    );
  }
}
Head.propTypes = {
  onAdd: PropTypes.func,
  setAllToComplete: PropTypes.func,
};
Head.defaultProps = {
  onAdd: () => {},
  setAllToComplete: () => {},
};
