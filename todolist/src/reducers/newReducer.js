// remember that state has to be an object, not an array
export const initialState = {
  toDoList: [
    {
      task: "Farm an abyssal whip",
      completed: "false",
      id: 3892987589
    }
  ]
};

export const newReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("dispatch", state);
      return {
        toDoList: [
          ...state.toDoList,
          { task: action.payload, completed: false, id: new Date() }
        ]
      };

    // mark completed
    case "COMPLETE_TASK":
      return {
        toDoList: state.toDoList.map(toDoItem => {
          if ((toDoItem.id = action.payload)) {
            return { ...toDoItem, completed: !toDoItem.completed };
          } else {
            return toDoItem;
          }
        })
      };

    // filtering
    case "FILTER_DONE":
      console.log("filtering started");
      //why didnt it keep my initial state inside the filter
      return {
        toDoList: state.toDoList.filter(toDoItem => !toDoItem.completed)
      };

    default:
      return state;
  }
};
