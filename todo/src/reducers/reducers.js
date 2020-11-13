export const ADD_ITEM = "ADD_ITEM"
export const DONE = "DONE"
export const CLEAR = "CLEAR"


export const initialState = {list:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },{
    item: 'HELLO',
    completed: false,
    id: 3892987589
  }]}
  

  export const toDoReducer = (state, action) => {
        switch (action.type){
          case ADD_ITEM:
            return {...state, list: [...state.list, {item: action.payload, completed: false, id: Date.now()}]}
          case DONE:
            return {...state, list: state.list.map(todo => {
              if (todo.id === action.payload){
                return {...todo,
                completed: !todo.completed
              }
              } else {
                return todo
              }
            })}
            case CLEAR:
              return {...state, list: state.list.filter(todo => !todo.completed)}
              default:
                return state
        }
      }

      