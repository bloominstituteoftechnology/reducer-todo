export const initialState = {
  tasks : [
    {
      id: 1,
      item: "Buy ingredients to make pie",
      completed: false,
    },
    {
      id: 2,
      item: "Make pie",
      completed: false,
    },

    {
      id: 3,
      item: "Eat pie",
      completed: false,
    }

  ]
}

export const reducerTodos = (state, action) => {
  // console.log(state)

  switch(action.type) {
    case "Add_New_Task":
      const newTask = {
        id: Date.now(),
        item: action.payload,
        completed: false
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      }
  }
}
