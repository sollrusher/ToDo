/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, setAllToComplete } from '../../redux/actions';

const Head = () => {
  const dispatch = useDispatch();
  const onValueChange = (event) => {
    if (event.key === 'Enter') {
      const temp = event;
      dispatch(addItem(event.target.value));
      
      temp.target.value = '';
    }
  };

  const onComplete = () => {
    dispatch(setAllToComplete());
  }


  return (
    <div className="todo__head">
      <button
        type="button"
        className="todo__head-checkall"
        onClick={onComplete}
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

// приклеиваем данные из store


export default Head;
