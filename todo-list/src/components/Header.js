import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Header({dispatch, active}) {
  
  return (
    <div className="header">
      <h1>Todo List</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_INPUT_FIELD" })}>
        {active ? (
          <ExpandLessIcon style={{ fontSize: 40 }} />
        ) : (
          <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
        )}
      </button>
    </div>
  );
}

export default Header;
