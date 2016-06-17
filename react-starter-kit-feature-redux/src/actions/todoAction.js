import * as types from '../constants/TodoTypes';

export function addTodo(text) {
  console.log("run to addTodo:" + text);
  return {type: types.ADD_TODO, text}
}
