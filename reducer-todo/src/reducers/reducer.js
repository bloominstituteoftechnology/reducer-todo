export const initialState = {
  todos:[
    {
      task:"completed homework",
      completed:false,
      id: 363786
    },
    {
      task:"bake cookies",
      completed:true,
      id: 3636776
    }
]
}

export function reducer (state, action){ 
    console.log("I am the action from reducer", action)
    switch(action.type){
       
        case "TOGGLE":
            return{
                ...state,
                todos:state.todos.map(i =>{
                    if(i.id === action.payload){                    
                    return{
                        ...i,
                        completed:!i.completed}
                        }else{
                    return i
                    }
                })
            }
            case 'FILTER':
                return{
                    ...state,
                    todos: state.todos.filter(i =>!i.completed)
                }
            case 'ADD_TODO':
            const newTodo = {
                task:action.payload,
                completed:false,
                id:Date.now()
                }               
                return{
                    ...state,
                    todos: [...state.todos,newTodo]                                   
         }
        default:
            return state
    }
}