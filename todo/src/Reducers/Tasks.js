export const initialTasks = [];

function TasksReducer(tasks, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [...tasks, action.payload] 
      case 'CHANGE_COMPLETE':
        let tempChange = [...tasks];
        let index = tempChange.findIndex(i => i.id === action.id);
        if(tempChange[index].completed === false) tempChange[index].completed = true 
        return [...tempChange];
        case 'CHANGE_INCOMPLETE':
        let inChange = [...tasks];
        let inIndex = inChange.findIndex(i => i.id === action.id);
        if(inChange[inIndex].completed === true) inChange[inIndex].completed = false 
        return [...inChange];
      case 'CLEAR-COMPLETED':
        let temp = [...tasks];
        temp = temp.filter(a => !a.completed);
        return [...temp];
      default:
        return tasks
    }
  }

  export default TasksReducer;