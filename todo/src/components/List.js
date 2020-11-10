import React, { useState } from "react";
import { connect } from "react-redux";
import Item from "./Item";

const List = (props) => {
  console.log("Props in the List component: ", props);
  const [list, setList] = useState([{ ...props }]);
  console.log("This is a list item: ", list);
  return (
    <div>
      <h3>This is the List component. </h3>
      {list.map((task) => (
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
  };
};
export default connect(mapStateToProps, {})(List);
