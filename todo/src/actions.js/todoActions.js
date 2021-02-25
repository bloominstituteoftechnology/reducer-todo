export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const ADD_TODO = "ADD_TODO";

// action creator: is a function that formats an action object
//  () => {type: string, payload: any}

// this is the translation layer between components and reducer 
export default {
  addTodo: (item) => {
    console.log("add todo action creator - translating request into reducer format")
    return { type: ADD_TODO, payload: item};
  },
  toggleComplete: (id) => { 
    console.log("toggle complete action creator - translating request into reducer format")
    return { type: TOGGLE_COMPLETE, payload: id };
  }
}
