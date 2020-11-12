//build initial state and build out simple reducer
//export both 

export const initialState = {
    todoList: [ {
         itemName: 'Learn about Reducers',
         completed: false,
         id: 3892987589
       }
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