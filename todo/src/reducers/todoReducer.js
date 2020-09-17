export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

function newTodo(todo) {
  return { item: todo, completed: false, id: Date.now() };
}

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, newTodo(action.payload)];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          //   console.log("todo", todo);
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case CLEAR_COMPLETED:
      return todos.filter((todo) => {
        return !todo.completed;
      });

    default:
      return todos;
  }
};
