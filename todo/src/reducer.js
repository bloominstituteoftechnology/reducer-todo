//  reducer function //

// what is a reducer- its a function that takes in multiple items, and reduces them down to a single item, then returns that item.

// React redux- the reducer function will take in a state object (which is the current state) and an action object. Then it will create and return a brand new state object which will become the NEW current state.


export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

// Actions //

// Actions- describe to the reducer fuction what the the even that took place and tell the reducer function how to update that state event or "action".

// Action must be objects, and they must have a "type:" property. They can alose have a payload which is (data) property as well.

 export function theReducer(state, action)
