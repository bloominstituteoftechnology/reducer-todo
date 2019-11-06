export const initialState = []


export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      const newTask = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return [...state, newTask];
    
    case 'MARK_COMPLETED':
      return state.map(task => {
        if (task.id === action.payload) {
          console.log(task)
          return {...task, completed: !task.completed} 
        } else return {...task}
      }) 
      
    case 'CLEAR_COMPLETED':
      const completedTasks = state.filter(task => {
        return task.completed === false
      })  
      return completedTasks

    default: return state
  }
}

