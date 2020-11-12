export const HOLD_TODO = "HOLD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";

export const holdTodo = (todo) => {
  return {
    type: HOLD_TODO,
    payload: todo,
  };
};

export const markComplete = () => {
  return {
    type: MARK_COMPLETE,
  };
};
