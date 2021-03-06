/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Item({
  label, id, onDelete, onToggleChecked, checked,
}) {
  let nameClass = 'todo-list__item';

  if (checked) {
    nameClass += ' active';
  }

  return (
    <li key={id} className={nameClass}>
      <input type="checkbox" className="list-item__checkbox" onClick={onToggleChecked} />
      <label>{label}</label>
      <button type="button" className="list-item__delete" onClick={onDelete}> </button>
    </li>
  );
}
