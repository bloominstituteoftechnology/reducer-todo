import React, { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({ name, completed }) {
  let getRidOf = false;
  const [done, setDone] = useReducer(todoReducer, completed);
  const [remove, processRemoval] = useReducer(todoReducer, getRidOf);

  return (
    <div className={`todo ${remove ? "remove" : ""}`}>
      {!done ? (
        <RadioButtonUncheckedIcon
          style={{ cursor: "pointer" }}
          onClick={() => setDone({ type: "MARK_TODO_COMPLETED" })}
        />
      ) : (
        <RadioButtonCheckedIcon
          style={{ cursor: "pointer", color: "green" }}
          onClick={() => setDone({ type: "MARK_TODO_COMPLETED" })}
        />
      )}
      <h3>{name}</h3>
      <DeleteForeverIcon style={{ cursor: "pointer" }} onClick={() => processRemoval({type: "REMOVE_TODO"})}/>
    </div>
  );
}

export default Todo;
