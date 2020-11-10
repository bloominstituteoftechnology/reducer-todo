export const HOLD_TODO = "HOLD_TODO";
export const ADD_TASK = "ADD_TASK";

export const holdTodo = (todo) => {
  return {
    type: HOLD_TODO,
    payload: todo,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
