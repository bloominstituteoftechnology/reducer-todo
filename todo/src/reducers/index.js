import { ADD_TODO, MARK_TODO, DELETE_TODO} from "../actions"

export const initialState = {
    todo: [
        {id:Date.now(), name: '', completed: false}
    ]

}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case(ADD_TODO):
            return({
                ...state,
                todo: [...state.todo, {name: action.payload, completed: false, id:Date.now()}]
            
            })
            
            case(MARK_TODO):
                return({
                ...state,
                todo: [...state.todo.splice((item,index)=>{
                    if(item.id===true){
                        return {...item, completed:action.payload.completed}
                    }
                   return item
                })]
            })
            case(DELETE_TODO):
                return({
                    ...state,
                    todo: [...state.todo.filter((item,idx)=>{
                        if(item===true){
                            return !item
                        }
                        return item
                    })]
                })
        default:
            return(state)
    }
}