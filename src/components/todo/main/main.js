/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Item from '../item';
import { connect } from 'react-redux';
import { onToggleChecked, deleteItem } from '../../redux/actions'

function Main({ onDelete, items, onToggle }) {

  
  // const onToggleChecked = (id) => {
  //   // const data = state.data.map(item => item.id !== id ? item : !item.checked)
  //   toggleCheck({ id })
  //   // dispatch(setData({ data }))
  // }

  const elements = items.map((item) => (
    <Item
      label={item.label}
      checked={item.checked}
      id={item.id}
      onDelete={() => onDelete(item.id)}
      onToggleChecked={() => onToggle(item.id)}
    />
  ));

  return (
    <div className="todo__main">
      <ol className="todo__list">{elements}</ol>
    </div>
  );
}

const mapStateToProps = store => {
  console.log(store.todos) // посмотрим, что же у нас в store?
  return {
    items: store.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => dispatch(onToggleChecked(id)),
    onDelete: id => dispatch(deleteItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
