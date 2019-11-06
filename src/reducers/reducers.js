export const initialState = []


export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      const newTask = {
        item: action.payload,
        completed: false,
        id: Date.now(),
        editing: false
      }
      return [...state, newTask];

    case 'ADD_EDITED_TASK':
      return state.map(task => {
        if (task.id === action.payload.id) {
          return {...task,
            editing: false} 
          }  else return {...task}
      })
    
    case 'MARK_COMPLETED':
      return state.map(task => {
        if (task.id === action.payload) {
          return {...task, completed: !task.completed} 
        } else return {...task}
      }) 
      
    case 'CLEAR_COMPLETED':
      const completedTasks = state.filter(task => {
        return task.completed === false
      })  
      return completedTasks

    case 'DELETE_TASK':
      return state.filter(task => {
        return task.id !== action.payload 
      })

    case 'EDIT_TASK':
      return state.map(task => {
        if(task.id === action.payload) {
          return {...task, editing: true}  
        } else return {...task}
      })

    default: return state
  }
}

