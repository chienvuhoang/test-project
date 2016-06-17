import {combineReducers} from 'redux';
import runtime from './runtime';
import todos from './todos';

export default combineReducers({
  runtime,
  todos
});
