export const initialState = {
    list:[
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]
}

export function todoReducer (state, action){
    switch(action.type) {
        case "ADDTODO" :
            return{
                list:[...state.list, action.payload]
            }
        case "COMPLETETODO" :
            return{
                list: state.list.map(item =>{
                    if(item.id === action.payload){
                        return{...item, completed:!item.completed}
                    } else{
                        return item
                    }
                })
            }
        case "DELETETODO" :
            return{
                list: state.list.filter(item => !item.completed)
            }
      default:
            return state

            
    
    }
}