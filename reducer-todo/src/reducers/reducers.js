import React from "react"

export const initialList = {
todo: [
  {
    what: "Code 2 hours besides school",
    id: 1,
    finished: false
  },
  {
    what: "Work Out",
    id: 5,
    finished: false
  },
  {
    what: "Finish Project",
    id: 6,
    finished: false
  },
  {
    what: "REST",
    id: 7,
    finished: false
  }
]}

export const reducer = (state, action) => {
    // switch statement - simplified if/else if/ ... /else statement
    // if or else if blocks become "cases"
    switch (action.type) {
      case 'ADD_TASK':
          console.log("action.payload",action.payload)
          console.log("state",state)
        return {
            ...state,
            todo: [...state.todo,
                {
                    what:action.payload,
                    id: Date.now(),
                    finished: false
                }
            ]

        }
    //   case "CLEAR_COMPLETED"
      default:
        return state;
    }
  };