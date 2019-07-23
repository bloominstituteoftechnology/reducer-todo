import moment from 'moment'

export const todoListReducer = (state, {type, payload}) => {
    switch(type){
        case 'ADD_TODO':
            const newTodo ={
                id: Date.now(),
                todo: payload.todo,
                deadline: payload.deadline,
                completed: false
            }
            return [...state, newTodo]
        case 'REMOVE_COMPLETED':
            const notCompleted = state.filter(todo => !todo.completed)
            return [...notCompleted]
        case 'COMPLETE_ITEM':
            const completedItem = state.map(todo => {
                if(todo.id === payload)
                    todo.completed=!todo.completed
                if(todo.completed)
                    return {...todo, timeCompleted: moment().format('MMMM Do YYYY')}
                else
                    delete todo.timeCompleted
                return todo
            })
            return [...completedItem]
        default:
            return state
    }
}