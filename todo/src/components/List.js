import React from "react";
import { connect } from "react-redux";
import { holdTodo } from "../actions";

import Item from "./Item";

const List = (props) => {
  console.log("Props passed down to the List component: ", props);
  return (
    <div>
      <h3>This is the List component. </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, {})(List);
