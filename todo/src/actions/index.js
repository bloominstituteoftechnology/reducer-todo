export const ADD_TODO = "HOLD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const markComplete = () => {
  return {
    type: MARK_COMPLETE,
  };
};
