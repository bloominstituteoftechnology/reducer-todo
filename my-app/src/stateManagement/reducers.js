// Step 3 - One Reducer function per slice of state. 
import * as types from './actionTypes';
import { initialState } from '../index';

export function formReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_TODO:
            return {
                ...state,
                [action.payload.inputName]: action.payload.inputValue
            }
        default:
            return state;
    }
}

