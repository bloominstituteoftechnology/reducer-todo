import moment from 'moment';

export const initialTodoState = [

];

const emojiTable = {
  study: "📚",
  workout: "💪",
  fun: "😃"
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { description, dueDate, tag } = action.payload
      return [
        ...state,
        { id: state.length + 1, description, done: false, dueDate, tag: emojiTable[tag] }
      ]
    case "CHECK_TODO":
      state = [...state];
      const todoIndex = state.findIndex(todo => todo.id === action.payload)
      const todo = state[todoIndex]
      todo.done = !todo.done
      todo.done ? todo.doneTime = moment().format("MMM Do YYYY h:mm a") : todo.doneTime = undefined
      return state
    case "CLEAR_CHECKED":
      state = state.filter(todo => todo.done === false)
      return state
    default:
      return state;
  }
};
