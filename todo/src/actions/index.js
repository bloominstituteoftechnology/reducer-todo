const set_todo = "set_todo";
const set_new_todo_text = "set_new_todo_text";

export const setTodo = todo => {
  return { type: set_todo, payload: todo };
};

export const setNewTodoText = todoText => {
  return { type: set_new_todo_text, payload: todoText };
};
