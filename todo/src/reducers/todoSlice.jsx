//take a todos array, reduce the id i.e. id0 + id1 + id2 - id1 = maxID + id1 = newest unique ID
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const initialState = {
  todos: [
    { id: 0, text: 'Learn how to write reducers.', completed: false },
    { id: 1, text: 'Learn Redux.', completed: false },
    { id: 2, text: 'Learn how to write psuedo-code before starting to code.', completed: false }
  ]
}

//use initialState as a default value
export default function todosReducer(state = initialState, action) {
  //reducer will look at the action field to decide what happens
  switch (action.type) {
    //different actions
    case 'TODO_ADDED': {
      //return a new state object
      return {
        //it must have all existing state data, but have a new array for todo fields
        ...state,
        todos: [
          //make sure the old todos are there
          ...state.todos,
          //add a new todo object

          { id: nextTodoId(state.todos), text: action.payload, completed: false }
        ]
      }
    }
    case 'TODO_TOGGLED': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo //if this isn't the item we're looking for leave it alone.
          }
          //this IS the todo that has to change, return a copy but flip the completed flag
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    case 'COLOR_SELECTED':{
      const { color, todoId } = action.payload
      return state.map(
        ( todo ) => {
          if( todo.id !== todoId ){
            return todo
          }
          return {
            ...todo,
            color,
          }
        }
      )
    }
    case 'TODO_DELETED':{
      return state.filter( todo =>  todo.id !== action.payload )
    }
    case 'TODO_MARK_ALL_COMPLETED':{
      return state.map( todo => { return { ...state, completed: true  } } )
    }
    case 'TODO_COMPLETED_CLEARED': {
      return state.filter( todo => !todo.completed )
    }
    default:
      //if the reducer doesnt care about the action or just doesnt know what that action 
      return state
  }
}