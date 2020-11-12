export const HOLD_TODO = "HOLD_TODO";

export const holdTodo = (todo) => {
  return {
    type: HOLD_TODO,
    payload: todo,
  };
};
