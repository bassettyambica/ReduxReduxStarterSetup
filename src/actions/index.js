import { ADD_TODO, DELETE_TODO } from "./types";

export const addTodo = data => dispatch => {
  return dispatch({
    type: ADD_TODO,
    data
  });
};

export const deleteTodo = index => dispatch => {
  return dispatch({
    type: DELETE_TODO,
    index
  });
}