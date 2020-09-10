import React, {useReducer, useState} from "react";


function reducer (state, action) {
  console.log("State, action from reducer:", state, action)
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        item: action.payload,
        completed: false,
        id: new Date()
      });
    case "TOGGLE_TODO":
      return state.map((todoObj) => {
        if (todoObj.id === action.id) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          }
        } else {
          return todoObj
        }
      })
    case "CLEAN_TODOS":
      return state.filter(todoObj => {
        return !todoObj.completed
      });
    default:
      return state;
  }
}




export default Form;