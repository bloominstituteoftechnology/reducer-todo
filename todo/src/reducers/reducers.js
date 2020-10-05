import React, { useState, useReducer } from "react";

let initialState = {
    item: 'Make a todo list app',
    completed: false,
    id: 3892987589
};
  
export const reducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT_TODO":
            return {
                ...state, 
                item: action.payload
            }
        case "MARK_COMPLETE":
            return {
                ...state, 
                completed: true
            }
        case "CLEAR_COMPLETE":
            return {

            }
        default:
        return state;
    }
};