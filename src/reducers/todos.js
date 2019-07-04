import { ADD_TODO, DELETE_TODO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.data];
    case DELETE_TODO:
        return [...state.slice(0, action.index), ...state.slice(action.index+1)]; 
    default:
      return state;
  }
}
