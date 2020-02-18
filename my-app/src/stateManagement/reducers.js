// Step 3 - One Reducer function per slice of state. 

import { ADD_TODO } from './actionTypes';
import { initialState } from '../index';

export function formReducer(state = initialState, action){
    switch(action.type){
        case type.ADD_TODO:
            return {
                ...state,
                [action.payload.inputName]: action.payload.inputValue
            }
        default:
            return state;
    }
}

