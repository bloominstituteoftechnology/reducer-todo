import React, { useState } from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = (props) => {
  console.log("Props in the List component: ", props);
  const [list, setList] = useState([{ ...props.list }]);
  console.log("This is a list item: ", list);
  return (
    <div>
      <h3>This is the List component. </h3>
      {list.map((task) => (
        <Item task={task} key={task.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: [...state.tasks],
  };
};
export default connect(mapStateToProps, {})(List);
