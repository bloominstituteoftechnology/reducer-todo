export const toDo = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
  dueDate: '11/10'
}]

let date = new Date() 
export const reducer = (state, action) => {
  
  switch (action.type){
     
      case "ADD_TODO":
          console.log(action.payload[1])
          console.log(Date.now());
          return [
              ...state,
              { item: action.payload[0],
                dueDate: (parseInt(date.getDate()) + parseInt(action.payload[1])),
                  id: Date.now(),
                  completed: false
              }
          ];
     
      case "TOGGLE_COMPLETED":
          return state.map(todo => {
              if (todo.id === action.payload){
                  return {
                      ...todo,
                      completed: !todo.completed
                  }
              }
              return todo;
          });
     
      case "CLEAR_COMPLETED":
          return state.filter(todo => !todo.completed);
      
      
      
      
      
      
      
          default:
          return state;
  }
}; 