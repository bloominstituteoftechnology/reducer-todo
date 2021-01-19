import { ADD_TASK, MARK_DONE, CLEAR_DONE} from '../actions/actions'


const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TASK):
            return([...state, {task: action.payload, id: action.id, completed: action.completed}])
            
        case(MARK_DONE):
            return state.map((task) => {
                return task.id === action.payload ? {...task, completed: !task.completed} : task
            })

        case(CLEAR_DONE): 
            return([...state.filter((task) => 
                !task.completed 
            )])
        default:
            return(state)
    }
}

export default reducer
