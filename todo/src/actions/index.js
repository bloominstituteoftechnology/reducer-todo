export const ADD_TODO = "ADD_TODO";
export const SET_COMPLETED = "SET_COMPLETED";
export const SET_NEW_TODO_TEXT = "SET_NEW_TODO_TEXT";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const setNewTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const setCompleted = (id) => {
  return { type: SET_COMPLETED, payload: id };
};

export const setNewTodoText = (newTodoText) => {
  return { type: SET_NEW_TODO_TEXT, payload: newTodoText };
};

export const clearCompleted = () => {
  return { type: CLEAR_COMPLETED };
};
