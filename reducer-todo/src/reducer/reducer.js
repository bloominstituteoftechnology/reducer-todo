import uuid from "uuid";

const initialTodos = [
  {
    title: "Learn about reducers",
    isCompleted: false,
    id: 389298789
  },
  {
    title: "Learn about reducers",
    isCompleted: false,
    id: 3892987589
  },
  {
    title: "Learn about reducers",
    isCompleted: false,
    id: 389298759
  }
];

const initialState = {
  todos: initialTodos,
  todo: ""
};

const ADD_TODOS = "ADD_TODOS";
const HANDLE_CHANGE = "HANDLE_CHANGE";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";

function reducer(state, action) {
  console.log("reducer state", state);
  switch (action.type) {
    case HANDLE_CHANGE:
      return { ...state, todo: action.payload };
    case ADD_TODOS:
      const newTodo = {
        id: uuid(),
        title: state.todo,
        isCompleted: false
      };
      return { ...state, todos: state.todos.concat(newTodo) };
    case TOGGLE_COMPLETE:
      const newItem = {
        ...action.payload,
        isCompleted: !action.payload.isCompleted
      };
      const newTodos = state.todos.map(_todo => {
        if (_todo.id === action.payload.id) {
          return newItem;
        } else {
          return _todo;
        }
      });
      return { ...state, todos: newTodos };
    case CLEAR_COMPLETED:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}

export { initialState, reducer };
