import moment from "moment";

const date = new Date('July 22 2019 07:22:13')
const date1 = new Date('February 22, 2020 07:22:13')
const date2 = new Date('January 22, 2021 07:22:13')
const initialTodos = [
  {
    title: "Learn about reducers",
    isCompleted: false,
    id: moment('July 22 2019 07:22:13').format('MMMM Do YYYY, h:mm:ss a'),
    due_by: date,
    overDue: "Task is NOT overdue"
  },
  {
    title: " Review Frontend Masters",
    isCompleted: false,
    id:moment('February 22 2020 07:22:13').format('MMMM Do YYYY, h:mm:ss a'),
    due_by: date1,
    overDue: "Task is NOT overdue"
  },
  {
    title: "Attempt replit assignment",
    isCompleted: false,
    id:moment('January 22 2020 07:22:13').format('MMMM Do YYYY, h:mm:ss a'),
    due_by: date2,
    overDue: "Task is NOT overdue"
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
const EDIT_TODO = "EDIT_TODO";

function reducer(state, action) {
  console.log("reducer state", state);
  switch (action.type) {
    case HANDLE_CHANGE:
      const editedTodo = {...action.payload.todo, title:action.payload.inputValue}
      console.log("edited Todo", editedTodo)
        const newEditedTodos = state.todos.map(_todo => {
          if (_todo.id === action.payload.todo.id) {
            return editedTodo;
          } else {
            return _todo;
          }
        });
        return { todos: newEditedTodos };
      // return { ...state, todo: action.payload };
    case ADD_TODOS:
      const newTodo = {
        id: Date(Date.now()).toString(),
        title: state.todo,
        isCompleted: false,
        due_by: Date.now(),
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
      // case OVER_DUE:
      case EDIT_TODO:
        return {...state, todo: action.payload.title}
        
  


    default:
      return state;
  }
}

export { initialState, reducer };
