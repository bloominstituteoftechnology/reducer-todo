export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const markComplete = (completed) => {
  return {
    type: MARK_COMPLETE,
    payload: completed,
  };
};
