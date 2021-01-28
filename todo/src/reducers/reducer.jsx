import filtersReducer from './filtersSlice'
import todosReducer from './todoSlice'

export default function rootReducer( state = {}, action ){
  //return a new obj for root state
  return {
    //the value of state.todos is whatever the reducer returns
    //for both we only pass in their slice of state
    filters: filtersReducer(state.filters, action),
    todos: todosReducer(state.todos, action)
  }
}