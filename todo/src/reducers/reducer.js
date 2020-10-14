export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';

export const initialState ={
    data: [
    {
      task: 'Do Homework',
      id: Date.now(),
      completed:false
    }
  ]
}


export const formReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
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