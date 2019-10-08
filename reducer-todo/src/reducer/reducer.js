import uuid from "uuid";

const date = new Date('July 22, 2019 07:22:13')
const date1 = new Date('July 22, 2020 07:22:13')
const date2 = new Date('July 22, 2021 07:22:13')
const initialTodos = [
  {
    title: "Learn about reducers",
    isCompleted: false,
    id: date.toString(),
  },
  {
    title: " Review Frontend Masters",
    isCompleted: false,
    id:date1.toString(),
  },
  {
    title: "Attempt replit assignment",
    isCompleted: false,
    id: date2.toString(),
  }
];

//slices of state
const initialState = {
  todos: initialTodos,
  todo: ""
};

//action type
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
        id: Date(Date.now()).toString(),
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
