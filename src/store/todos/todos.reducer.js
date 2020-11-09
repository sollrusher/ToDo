import {
  ADD_ITEM,
  DEL_ITEM,
  DEL_COMPLETE,
  SET_TO_COMPLETED,
  TOGGLE_CHECK,
} from '../actionTypes';

const initialState = { todoItems: [] };

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            label: action.label,
            checked: false,
            id: action.id,
          },
        ],
      };

    case TOGGLE_CHECK:
      return {
        ...state,
        todoItems: state.todoItems.map((item) => (item.id === action.id ? {
          ...item,
          checked: !item.checked,
        } : item)),
      };
    case DEL_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.id),
      };
    case SET_TO_COMPLETED: {
      const countCheck = state.todoItems.filter((item) => (item.checked));
      const countUnCheck = state.todoItems.filter((item) => (!item.checked));

      if (countCheck.length > countUnCheck.length || countCheck.length === 0) {
        return {
          ...state,
          todoItems: state.todoItems.map((item) => ({
            ...item,
            checked: true,
          })),
        };
      }
      return {
        ...state,
        todoItems: state.todoItems.map((item) => ({
          ...item,
          checked: false,
        })),
      };
    }
    case DEL_COMPLETE:
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => !item.checked),
      };

    default:
      return state;
  }
};

export default todos;
