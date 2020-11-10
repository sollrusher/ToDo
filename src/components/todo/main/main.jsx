import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../item';
import { onToggleChecked, deleteItem } from '../../../store/todos/todos.action';

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
  onDelete, items, onToggle, filter,
}) {
  const show = React.useMemo(() => setFilterItem(items, filter), [items, filter]);

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
  filter: store.filter.filterSelect,
  items: store.todos.todoItems,
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (id) => dispatch(onToggleChecked(id)),
  onDelete: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
  onDelete: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
