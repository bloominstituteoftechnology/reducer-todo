import {ADD_TASK, TOGGLE_COMPLETED, CLEAR_COMPLETED} from './formActions';

export const initialState = {
    tasks: []
}


const formReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case(ADD_TASK):
        return ({
          ...state,
          tasks:[...state.tasks, action.payload]
        })

    case(TOGGLE_COMPLETED):
        return ({
          ...state,
          tasks:[...state.tasks.map(task => {
          if(task.id === action.payload) {
            return {...task, completed: !task.completed}
          }
            return(task)
        })]  
      })

    case(CLEAR_COMPLETED):
        return ({
        ...state,
        tasks: [...state.tasks.filter((task => {
            return (!task.completed)
        }
        ))]
      })

      default:
        return(state);

    }
  }

export default formReducer;
    
          