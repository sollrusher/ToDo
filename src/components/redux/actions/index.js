/* eslint-disable no-plusplus */
let nextTodoId = 1;

export const addItem = (label) => ({
  type: 'ADD_ITEM',
  id: nextTodoId++,
  label,
});

export const deleteItem = (id) => ({
  type: 'DEL_ITEM',
  id,
});

export const deleteComplete = () => ({
  type: 'DEL_COMPL',
});

export const setAllToComplete = () => ({
  type: 'ALL_COMPL',
});

export const onToggleChecked = (id) => ({
  type: 'TOGGLE_CHECK',
  id,
});

export const setFilterAll = () => ({
  type: 'SHOW_ALL',
});
export const setFilterComplete = () => ({
  type: 'SHOW_COMPLETE',
});
export const setFilterActive = () => ({
  type: 'SHOW_ACTIVE',
});
