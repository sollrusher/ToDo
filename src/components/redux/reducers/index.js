/* eslint-disable max-len */
import { combineReducers } from 'redux';
import { filters } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          label: action.label,
          checked: false,
          id: action.id,
        },
      ];
    case 'TOGGLE_CHECK':
      return state.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
    default:
      return state;
  }
};

const filter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  filter,
});
