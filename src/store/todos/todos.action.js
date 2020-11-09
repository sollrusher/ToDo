import {
  ADD_ITEM,
  DEL_ITEM,
  DEL_COMPLETE,
  SET_TO_COMPLETED,
  TOGGLE_CHECK,
} from '../actionTypes';

let nextTodoId = 0;

function nextID() {
  nextTodoId += 1;
  return nextTodoId;
}

export const addItem = (label) => ({
  type: ADD_ITEM,
  id: nextID(),
  label,
});

export const deleteItem = (id) => ({
  type: DEL_ITEM,
  id,
});

export const deleteComplete = () => ({
  type: DEL_COMPLETE,
});

export const setAllToComplete = () => ({
  type: SET_TO_COMPLETED,
});

export const onToggleChecked = (id) => ({
  type: TOGGLE_CHECK,
  id,
});
