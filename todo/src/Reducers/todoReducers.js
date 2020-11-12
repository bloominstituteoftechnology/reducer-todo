export const TOGGLE_EDITING = "TOGGLE_EDITING"
export const ADD_TASK = "ADD_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"
export const CLEAR_TASK = "CLEAR_TASK"


export const initialTodoState = {
   data:[
    {
        item: 'Learn about reducers',
        completed: false,
        id: 1
      },
      {
        item: 'Learn about redux',
        completed: false,
        id: 2
      },
      {
        item: 'Learn typeScript',
        completed: false,
        id: 3
      },
      {
        item: 'Learn how to swim',
        completed: false,
        id: 4
      }
   ],
    editing:false,
}

export const todoReducer = (state,action) =>{
    console.log(`kh: todoReducer.js:state,action`, state, action)
    switch(action.type){
        case "TOGGLE_EDITING":
            return{
                ...state,
                editing: !state.editing
            }
        case "ADD_TASK":
            const addNewTask ={
               
                item:action.payload,
                id:Date.now(),
                completed:false,
                editing:false
            };
            return{
                ...state,
                data:[...state.data,addNewTask]
            };
            case "TOGGLE_TASK":
                return{
                    ...state,
                    data:state.data.map(data =>{//mapping through the data to see if the payload (onClick id) matches the id 
                        if(action.payload === data.id){//if the payload (onClick) matches the data's id
                           return{//we are going to return the state data
                               ...data,//spreading data or pulling it down
                               completed:!data.completed// boolean to change state of the completed which is currently false to true
                           } 
                        }
                        else{
                            return {...data}
                        }
                    })
                };
                case "CLEAR_TASK":
                    return{
                        ...state,
                        data:state.data.filter(item => !item.completed)// here we are grabbing the state, and filtering the data. the filter will capture the completed task and the clear button will clear them
                    }

        default:
            return state;
    }


}

