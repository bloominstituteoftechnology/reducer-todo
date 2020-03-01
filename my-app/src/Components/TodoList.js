import React, { useState, useReducer } from "react";
import { initialState, TodoListReducer } from "../Reducers/TodoListReducer";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [finished, setFinished] = useState("");
  const [state, dispatch] = useReducer(TodoListReducer, initialState);

  console.log(state.items);

  const handleChanges = e => {
    setNewItem(e.target.value);
  };

  const addItem = event => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const todoFinished = e => {
    dispatch({ type: "MARK_DONE" });
  };

  return (
    <div>
      <div className="form-container">
        <input
          type="text"
          value={newItem}
          onChange={handleChanges}
          placeholder="Add new Todo"
        />
        <button onClick={addItem}>Add Todo</button>
        <div>
          <ul>
            <li>
              {state.items.map(item => {
                return (
                  <p
                    onClick={todoFinished}
                    className={`todo${
                      state.items.completed ? " completed" : ""
                    }`}>
                    {item.todo}
                  </p>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
