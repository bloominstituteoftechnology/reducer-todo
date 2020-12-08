const ADD_TODO = "add_todo";
const NEW_TODO = "new_todo";
const COMPLETED_TODO = "completed_todo";

export const addTodo = newTodo => {
  return { type: ADD_TODO, payload: newTodo };
};

export const newTodo = todo => {
  return { type: NEW_TODO, payload: todo };
};

// export const completedTodo = completed => {
//   return { type: COMPLETED_TODO, payload: completed };
// };

// export const newId = () => {
//     return
// }
