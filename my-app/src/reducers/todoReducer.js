export const initialTodos = [
    {
    item: "Learn about reducers",
    completed: false,
    id: 143849304
  },
  {
    item: "Exercise",
    completed: false,
    id: 385048380
  }
];

  export const toDoReducer = (todos, action) => {
      console.log(action);
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return todos.map(item => {
            if (action.payload === item.id) {
                item.completed = !item.completed;
                //console.log(item);
            }
            return item
        })
      case "ADD_TASK":
        return [
          ...todos,
          {item: action.payload,
          completed: false,
          id: new Date()}
        ];

        case "CLEAR_COMPLETED":
            return todos.filter(item => item.completed === false);

      default:
        return todos;
    }
  };