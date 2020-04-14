import React from 'react';

import '../App.css';

const ToDo = (props) => {
  console.log('this is props in todo: ', props);
  return (
    <div
      className={props.item.completed ? 'completed' : ''}
      onClick={(event) => {
        event.preventDefault();
        props.toggleCompleted(props.item.id);
      }}
    >
      <br />
      <label>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.toggleCompleted(props.item.id)}
        />
        {props.item.task}
      </label>
    </div>
  );
};

export default ToDo;
