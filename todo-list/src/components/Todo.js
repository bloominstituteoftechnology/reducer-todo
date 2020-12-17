import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({name, completed}) {
  return (
    <div className="todo">
      <ListAltIcon />
      <h3>{name}</h3>
      <DeleteForeverIcon style={{ cursor: "pointer" }} />
    </div>
  );
}

export default Todo;
