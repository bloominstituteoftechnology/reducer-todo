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

      case 'Toggle_Task_Status':
        const updatedTasks = state.tasks.map(task => {
          if (task.id === action.payload) {
            return {...task, completed: !task.completed}
          } else {
            return task
          }
        })
        return {
          ...state,
          tasks: updatedTasks
        }

        case 'FILTER_COMPLETED_TASKS':
          const incompleteTasks = state.tasks.filter( task => {
              if (task.completed === false) {
                  return {...task}
              }
          })
          return {
              ...state,
              tasks: incompleteTasks
          }
      default:
          return state;
  }
}
