import React from 'react';
import PropTypes from 'prop-types';

function Item({
  label, id, onDelete, checked, onToggleChecked,
}) {
  let nameClass = 'todo-list__item';

  if (checked) {
    nameClass += ' active';
  }

  return (
    <li key={id} className={nameClass}>
      <input type="checkbox" className="list-item__checkbox" onClick={onToggleChecked} />
      <text>{label}</text>
      <button type="button" className="list-item__delete" onClick={onDelete}> </button>
    </li>
  );
}

export default Item;

Item.propTypes = {
  onDelete: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onToggleChecked: PropTypes.func.isRequired,
};
