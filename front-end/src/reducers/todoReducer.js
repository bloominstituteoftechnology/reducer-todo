export let initialToDoTasks = [
  {
    id: 0,
    task_name: "Play with chicken",
    completed: false,
    completed_by: "2019-10-01"
  },
  {
    id: 1,
    task_name: "Complete daily coding challenge",
    completed: false,
    completed_by: "2019-09-15"
  },
  {
    id: 2,
    task_name: "Buy more soy milk",
    completed: false,
    completed_by: "2019-09-20"
  },
  {
    id: 3,
    task_name: "Mown front lawn",
    completed: false,
    completed_by: "2019-09-23"
  },
  {
    id: 4,
    task_name: "Hang family portrait",
    completed: true,
    completed_by: "2019-08-10"
  }
];

export const toDoReducer = (toDoTasks, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...toDoTasks, action.todo];
    case "DELETE_TODO":
      return toDoTasks.filter(toDoTask => {
        return toDoTask.id !== action.id;
      });
    case "COMPLETE_TODO":
      return toDoTasks.map(toDoTask => {
        if (toDoTask.id === action.id) {
          return { ...toDoTask, completed: true };
        } else {
          return toDoTask;
        }
      });
    case "UNDO_COMPLETED_TODO":
      return toDoTasks.map(toDoTask => {
        if (toDoTask.id === action.id) {
          return { ...toDoTask, completed: false };
        } else {
          return toDoTask;
        }
      });

    default:
      return toDoTasks;
  }
};
