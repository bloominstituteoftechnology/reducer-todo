// import { reducer, initialState } from "../reducers/reducer";

export const initialState=[{
    item:'',
    completed:false,
    id: ''}]


export const NEW_TODO='NEW_TODO'

export const TOGGLE_TODO='TOGGLE_TODO'

export const FILTER_COMPLETED_TODOS='FILTER_COMPLETED_TODOS'

// action creator
// function newTodo(){
//     return{
//         type: NEW_TODO
//     }
// }

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case NEW_TODO:
            return [...state, {item: action.payload, completed: false, id:new Date()}];
        case TOGGLE_TODO:
            return state.map((task)=>{
                if(task.id===action.payload){
                  return{...task, completed:!task.completed}}
                  else{return task}
                
                });
            // add map of state
            // if else 
        case FILTER_COMPLETED_TODOS:
            return state.filter(item=>
                item.completed===false);
        // filter completed events
        default: 
            return('default');
    }
    
}
// ,[...state]


