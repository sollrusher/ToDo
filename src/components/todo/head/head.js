/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions';

const Head = ({ dispatch }) => {
  const onValueChange = (event) => {
    if (event.key === 'Enter') {
      const temp = event;
      dispatch(addItem(event.target.value));
      temp.target.value = '';
    }
  };

  // const { setAllToComplete } = this.props;

  return (
    <div className="todo__head">
      <button
        type="button"
        className="todo__head-checkall"
        // onClick={setAllToComplete}
      >
        ❯
      </button>
      <input
        type="text"
        placeholder="Введите то что вам нужно сделать"
        className="todo__head-input"
        onKeyPress={onValueChange}
      />
    </div>
  );
};

Head.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Head);
