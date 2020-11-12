import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

import Item from "./Item";

const List = (props) => {
  const [list, setList] = useState([{ ...props.tasks }]);

  return (
    <div>
      <h3>This is the List component. </h3>
      {props.tasks.map((task) => (
        <Item task={list} key={task.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    completed: state.completed,
    id: state.id,
    item: state.item,
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { addTask })(List);
