import React from "react";
import { connect } from "react-redux";

import Item from "./Item";

const List = (props) => {
  console.log("Props passed down to the List component: ", props.tasks);
  return (
    <div>
      <h3>This is the List component. </h3>
      {props.tasks.map((task) => (
        <Item tasks={task} key={task.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, {})(List);
