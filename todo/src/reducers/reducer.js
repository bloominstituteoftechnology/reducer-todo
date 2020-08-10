export const initial=
{
   newTodo: {title:'',
    id:Date.now(),
    details:'',
    completed:false},


    todos:[],

}

export function reducer (state,action){
    switch(action.type){

        case 'titleUpdate':
            return {...state,newTodo: {...state.newTodo,title:action.payload}}
        
            case 'descriptionUpdate':
            return {...state,newTodo: {...state.newTodo,description:action.payload}}
    

        case 'addTodo':
            return {...state,todos:[...state.todos,state.newTodo]} 
        
        case 'complete':
            const newArr = state.todos.map(item=>{
                if (item.title === action.payload){
                    item.completed = !item.completed
                    return item
                }
                return item
            })
            return {...state,todos:newArr}
        case 'clearComplete':
            const filterArr = state.todos.filter(item=>{
                if(item.completed !== true){
                    return item
                }
            })
            return {...state,todos:filterArr}
            
        
        default: return  state   
            
    }
}