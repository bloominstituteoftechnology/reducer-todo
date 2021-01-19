import { ADD_TODO, TOGGLE_COMPLETED, NEW_TODO, CLEAR_COMPLETE } from '../actions/index';


export const initialState ={
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()  
        }
    ],
    newTodo: ''
    
}

const reducer = (state, action) =>{
    switch(action.type){
        case('ADD_TODO'):
            return {...state, todo: [...state.todo,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()  
                    }]};
        case('TOGGLE_COMPLETED'):
            return{...state, todo: state.todo.filter(todo=>{
                if (todo.id === action.id){
                  return({...todo, completed: !todo.completed});  
                } else {
                    return{todo};
                }
            })
        };
        case('CLEAR_COMPLETE'):
        return{...state, todo: state.todo.filter(todo=>{
                  return(!todo.completed);
                })}
            case('NEW_TODO'):
            return{...state, newTodo: action.payload }
        default:
            return(state);
    }
};


export default reducer;