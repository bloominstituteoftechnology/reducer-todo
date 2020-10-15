export const initialState=
[{   todo:'',
    completed:false,
    id:''
}]
export const Toggle_Todo='Toggle_Todo';
export const Add_Todo='Add_Todo';
export const Clear_Completed='Clear_Completed';

export const todoReducer=(state,action)=>{
    switch(action.type){
        case Toggle_Todo: 
            return state.map((task)=>{if(task.id===action.payload){return{...task,completed:!state.completed}} else {return task}})
        case Add_Todo:
            return [...state,{todo: action.payload,completed:false,id:Date.now()}]
        case Clear_Completed:
            return state.filter(task=>task.completed===false)
        default: 
            return state
    }
}