export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_COMPLETED = "SET_COMPLETED";
export const SET_CURRENT_TEXT = "SET_CURRENT_TEXT";
export const SET_CLEAR = "SET_CLEAR"

export const setNewTodo = (itemText) => {
  return { type: SET_NEW_TODO, payload: itemText };
};

export const setCompleted = (todoItem) => {
  return { type: SET_COMPLETED, payload: todoItem };
};

export const setCurrentText = (itemText) => {
  return { type: SET_CURRENT_TEXT, payload: itemText };
};

export const setClear = () => {
    return { type: SET_CLEAR }
}