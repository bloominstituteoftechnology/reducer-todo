export const addItem = newItem => {
  console.log("executing new todo", newItem);
  return {
    type: "ADD_ITEM",
    payload: newItem
  };
};
