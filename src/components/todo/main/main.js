/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import Item from '../item';
import { onToggleChecked, deleteItem } from '../../redux/actions';

function setFilterItem(item, filter) {
  if (filter === 'complete') {
    return item.filter((element) => element.checked);
  }
  if (filter === 'active') {
    return item.filter((element) => !element.checked);
  }
  if (filter === 'all') {
    return item;
  }
  return 0;
}

function Main({
  store, onDelete, items, onToggle, filter,
}) {
  // eslint-disable-next-line no-console
  console.log(store);
  const show = setFilterItem(items, filter);
  const elements = show.map((item) => (
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

const mapStateToProps = (store) => ({
  store,
  filter: store.filter,
  items: store.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (id) => dispatch(onToggleChecked(id)),
  onDelete: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
