export const initialState = {//an object containing an array of objects
    tasks:
      [
        {
          item: 'Test Uno',
          completed: false,
          id: 3892987589
        }, {
          item: 'Test Dos',
          completed: false,
          id: 3892987585
        }
      ]
  }
  export const reducer = (state, action) => {
  
    switch (action.type) {
  
      case "TOGGLE_COMPLETE":
  
        //first lets find the todo in the array that needs to be toggled
  
        let indexToChange;
  
        state.tasks.forEach((item, index) => {
          console.log("looping", index);
          if (item.id === action.todoID) {
            indexToChange = index;
          }
        });
  
        console.log("indexToChange", indexToChange);
  
        let newTodoData = state.tasks.slice();//Google says .slice() will clone the array. I want a clone cause I don't want to be tryna edit state, I want a copy of state
  
        console.log("this.state.todoData undefined? ", state)
        console.log("newTodoData undefiuned? ", newTodoData);
  
        newTodoData[indexToChange].completed = !newTodoData[indexToChange].completed;//toggle
  
        return {tasks: newTodoData};
  
      case "CLEAR_COMPLETE":
  
        return {tasks: state.tasks.filter(item => { return !item.completed })};//set state to state with completed tasks filtered out
  
      case "ADD_TODO":
        console.log("ADD_TODO action");
        //set state to a new array containing the old list data, plus our new todo (concat doesn't mutate original, and returns the new array. works nicely for this)
        return {
          tasks: state.tasks.concat({
          item: action.todo,
          id: new Date().getMilliseconds(),
          completed: false
        })}
  
      default:
        console.log("Default: ", action);
        return state;
  
    }
  }