
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';

export const initialState ={
    data: [
    {
      task: 'Learn how to make vegan donuts',
      id: 1324,
      completed:false
    },
    {
        task: 'Learn how to drift',
        id: 643874,
        completed:false
      },
      {
        task: 'Learn how to kickflip',
        id: 789681,
        completed:false
      },
      {
        task: 'Learn how to swim',
        id:854841,
        completed:false
      }
  ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            const newTask = {
                task: action.payload,
                id:Date.now(),
                completed:false
            };
            return {
                ...state,
                data:[...state.data, newTask]
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                data: state.data.map(data => {
                    if (action.payload === data.id) {
                        return {
                          ...data,
                          completed: !data.completed
                        }
                    }
                })
            };
        case "CLEAR_TASK":
            return {
                ...state,
                data:state.data.filter(task => !task.completed)
            }
        default:
            return state;
    }
} 
