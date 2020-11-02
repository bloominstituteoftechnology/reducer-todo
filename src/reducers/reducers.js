                        //create initial states with an empty array object
const initalState = {
    todos:[],           
}
                    //create our reducer function that takes 2 arguments state and an action
const reducer = (state = initalState, action)=>{
  switch (action.type) {                         //switch statement thats switches action type
             
             case 'ADD_TODO': 
              return {
                  ...state,                                    //returns current state
                  todos: [...state.todos, action.payload],//append  current todos with newtodo that comes from action payload
              };

              case 'DELETE_TODO':    
              return{
                  ...state,                                  //returns current state
                  todos: state.todos.filter(todo=> todo.id!==action.payload), //filters todo item and removes by id
              }                                             //id comes from action payload
      default:                               //default state that returns state
          return state;
  } 
}                                   //move  to  index.js 

export default reducer;