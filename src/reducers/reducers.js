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
          return {...task, completed: !task.completed} 
        } else return task
      })       
    default: return state
  }
}

