import * as types from './actionTypes';
import uuid from 'uuid';

// Step 7 - Make action creators that the component can use directly
export function addToDoItem({ toDoItem }){
    return {
        type: types.ADD_TODO,
        payload: {
            toDoItem
        }
    }
}

export function changingFormData({currentFormData}) {
    return {
        type: types.FORM_CHANGE,
        payload: { 
            currentFormData
        }
    }
}