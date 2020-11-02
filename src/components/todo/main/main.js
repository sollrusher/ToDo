/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Item from '../item';

function Main({ posts, onDelete, onToggleChecked }) {
  const elements = posts.map((item) => (
    <Item
      label={item.label}
      checked={item.checked}
      id={item.id}
      onDelete={() => onDelete(item.id)}
      onToggleChecked={() => onToggleChecked(item.id)}
    />
  ));

  return (
    <div className="todo__main">
      <ol className="todo__list">{elements}</ol>
    </div>
  );
}

export default Main;
