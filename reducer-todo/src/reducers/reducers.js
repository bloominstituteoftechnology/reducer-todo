import React from "react"

export const initialList = [
  {
    what: "Code 2 hours besides school",
    id: 1,
    finished: false
  },
  {
    what: "Eat two eggs one sausage for",
    id: 2,
    finished: false
  },
  {
    what: "Steak",
    id: 3,
    finished: false
  },
  {
    what: "Fruits with heavy cream",
    id: 4,
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
]

export const reducer = (state, action) => {
    // switch statement - simplified if/else if/ ... /else statement
    // if or else if blocks become "cases"
    switch (action.type) {
      case 'SET_EDITING':
        return {}
      default:
        return state;
    }
  };