//Set an initial state value through a reducer and render a list of todos from that state

export const initialState = {
   todoList: [ {
        itemName: 'Learn JavaScript',
        completed: false,
        id: 3892987589
      },
      {
        itemName: 'Learn Java',
        completed: false,
        id: Date.now()
      },
      {
        itemName: 'Learn SQL',
        completed: false,
        id: 324
      },
      {
        itemName: 'Learn C',
        completed: false,
        id: 324
      },
    ]
}
    
    


const reducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            return {
                ...state, 
                todoList: [...state.todoList, {itemName:action.payload, finished: false, id: Date.now()}]
            }
            case "TOGGLE" :
                return {
                    todoList: state.todoList.map((item)=>{
                        if(item.id ===action.payload){
                            return {
                                ...item,
                                finished: !item.finished
                            }
                        } else
                        return item
                    })
                }

                case "CLEAR":
                    return{
                        todoList: state.todoList.filter((item) => item.finished === false)
                    }
    default:
        return (state)
    }
}

export {
    reducer
}