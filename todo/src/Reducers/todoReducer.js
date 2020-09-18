
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';

export const initialState ={
    list: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            task: 'Learn how to kickflip',
            completed: false,
            id: 3892987590
        },
        {
            task: 'Learn how to swim',
            completed: false,
            id: 3892987591
        },
        {
            task: 'Learn how to drift',
            completed: false,
            id: 3892987592
        },
  ]
}

export const todoReducer = (state, action) => {
      switch (action.type){
          case "ADD_TODO":
            const newTask ={
                name:action.payload,
                id:Date.now(),
                completed:false  
          };
            
            return {
                ...state,
                list:[...state.list, newTask]
            };
        case "TOGGLE_TASK":
            return {
                ...state,
                list: state.list.map(list => {
                    if (action.payload === list.id) {
                        return {
                          ...list,
                          completed: !list.completed
                        }
                    }
                })
            };
        case "CLEAR_TASK":
            return {
                ...state,
                list:state.list.filter(task => !task.completed)
            }
        default:
            return state;
    }
} 