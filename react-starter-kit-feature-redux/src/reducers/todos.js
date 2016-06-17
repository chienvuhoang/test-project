/**
 * Created by vuchien on 6/11/16.
 */
import {ADD_TODO} from '../constants/TodoTypes';
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log("run to to do reducerss -- --");
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: "Hello world Item add new"
        },
        ...state
      ];
    default:
      return state
  }
}
