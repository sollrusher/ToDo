import {
  combineReducers,
} from 'redux';
import todos from './todos/todos.reducer';
import filter from './filter/filter.reducer';

export default combineReducers({
  todos,
  filter,
});
