import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/Reducer";

const Todo = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  console.log(state);
  return (
    <div>
      <div className="Container">
        <h1>REDUCER TODO</h1>

        {state.map(state => {
          return (
            <div
              onClick={() => {
                dispatch({ type: "Toggle", payload: state.id });
              }}
            >
              {state.item + ", "}
            </div>
          );
        })}

        {/*Input*/}

        <input
          className="Input"
          type="text"
          name="newTitle"
          value={newTitleText}
          onChange={handleChanges}
        />

        {/* ADD*/}
        <button
          className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "AddTodo", payload: newTitleText });
          }}
        >
          Add Item
        </button>

        {/* Sub*/}
        <button
          className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "SubtractTodo", payload: newTitleText });
          }}
        >
          Subtract Item
        </button>
      </div>
    </div>
  );
};

export default Todo;
