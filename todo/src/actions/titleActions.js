export const TOOGLE_TODO = "TOGGLETODO";
export const UPDATE_LIST = "UPDATELIST";

export default { 
  toggleTodo: () => {
    return { type: TOGGLE_TODO }
  },
  updateList: (title) => {
    return { type: UPDATE_LIST, payload: title}
  }
}