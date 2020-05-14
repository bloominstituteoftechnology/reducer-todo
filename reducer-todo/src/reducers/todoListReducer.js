export const todoListReducer = (state, {type, payload}) => {
    switch(type){
        case 'ADD_TODO':
            const newTodo ={
                id: Date.now(),
                todo: payload,
                completed: false
            }
            return [...state, newTodo]
        case 'REMOVE_COMPLETED':
            const notCompleted = state.filter(todo => !todo.completed)
            return [...notCompleted]
        case 'COMPLETE_ITEM':
            const completedItem = state.map(todo => {
                if(todo.id === payload)
                    return {...todo, completed:!todo.completed}
                return todo
            })
            return [...completedItem]
        default:
            return state
    }
}