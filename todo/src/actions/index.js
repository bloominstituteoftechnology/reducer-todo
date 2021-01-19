
export const setToDoList = (toDoList) => {
  return({type: 'SET_TO_DO_LIST', payload: toDoList})
}
export const setInputValue = (inputValue) => {
  return({type: 'SET_INPUT_VALUE', payload: inputValue})
}