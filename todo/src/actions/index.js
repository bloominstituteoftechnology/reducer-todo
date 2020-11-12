export const HOLD_TODO = "HOLD_TODO";
export const ADD_TASK = "ADD_TASK";

export const holdTodo = (todo) => {
  return {
    type: HOLD_TODO,
    payload: todo,
  };
};

export const addTask = (todo) => {
  return {
    type: ADD_TASK,
    payload: todo,
  };
};
