export const initialText = ''
export const initialSetShow = true;

export const initialState = [{
    action: 'Learn about reducers',
    completed: false,
    // id: 3892987589
}]


export const ADD_TODO = 'ADD_TODO';
export const INPUT_RESET = 'INPUT_RESET';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const TOGGLE = 'TOGGLE';
export const VISIBILITY = 'VISIBILITY';

export function reducer(state, action){
    switch(action.type){
        case ADD_TODO:
      return [...state, action.payload];
        case TOGGLE:
            return state.map(item => item.action === action.payload.action ? {...item, completed: !item.completed} : item)
        default:
            return state;
    }
}

export function reducerString(state, action){
    switch(action.type){
      case INPUT_RESET:
          return '';
          case UPDATE_TEXT:
            return action.payload;
        default:
            return state;
    }
}

export function showReducer(state, action){
    switch(action.type){
        case VISIBILITY:
            return action.payload;
        default:
            return state;
    }
}