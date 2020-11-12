import React from "react";
import { connect } from "react-redux";

const Item = (props) => {
  console.log("Props from inside the Item component: ", props.tasks);
  return (
    <div>
      <p>{props.tasks.item}</p>
      {props.tasks.completed === false ? <div>completed</div> : <> </>}
      {/* {props.task.map((item) => (
        <div key={item.id}>
          <p>{item.item}</p>
          {item.completed === false ? <p>Completed</p> : <></>}
        </div>
      ))} */}
    </div>
  );
};

/* const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, {})(Item); */
export default Item;
