
export const initialState = [
    {
        task: 'Finish Assignment',
        id: 1001,
        completed: false
    }
]

export const reducer = (state = 
    initialState, action) => {
        console.log(action, 'action in reducer')
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]

        case "IS_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return  {...todo, completed: !todo.completed}
                } else {
                  return todo
                }
              })
      

        case "IS_CLEARED":
            return state.filter(task => 
                task.completed === false)
            
        default:
            return state

    }
}    
     
