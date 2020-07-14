import React from 'react';


const ToDo = (props) => {
  
  console.log(props);
  const completed = props.entry.completed ? "line-through black" : "none";
  const toggle = () => {
    props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.entry})
  };

  return (
    <div>
      <span style={{textDecoration: completed}} onClick={toggle}>
        {props.entry.item}
      </span>
    </div> 
  );
};

export default ToDo;
