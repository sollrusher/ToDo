/* eslint-disable max-len */
import {
  combineReducers
} from 'redux';
import {
  filters
} from '../actions';

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
      return state.map((item) => (item.id === action.id ? {
        ...item,
        checked: !item.checked
      } : item));
    case 'DEL_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'ALL_COMPL':
      const countCheck = state.filter((item) => (item.checked));
      const countUnCheck = state.filter((item) => (!item.checked));
      
      let newArr;
      if (countCheck.length > countUnCheck.length || countCheck.length === 0) {
        newArr = state.map((item) => {
          return {
            ...item,
            checked: true
          }
        })
      } else {
        newArr = state.map((item) => {
          return {
            ...item,
            checked: false
          }
        })
      }
      return newArr;
      case 'DEL_COMPL':
        return state.filter((item) => !item.checked)

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