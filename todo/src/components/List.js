import React from "react";
import { connect } from "react-redux";
import { markComplete } from "../actions";

import Item from "./Item";

const List = (props) => {
  return (
    <div>
      <h3>Your items will appear below</h3>
      {props.tasks.map((task) => (
        <Item tasks={task} key={task.id} markComplete={markComplete} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { markComplete })(List);
