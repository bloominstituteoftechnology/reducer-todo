import React, { useState } from 'react';

export default function Todos(props) {
  const [display, setDisplay] = useState(false);
  const todoClick = (e) => {
    e.preventDefault();
    props.dispatch({ type: 'complete', payload: props.item.list });
  };

  return (
    <div
      id='todos'
      className={props.item.completed ? 'completed' : 'notCompleted'}
      onClick={todoClick}
    >
      <h3>{props.item.list} </h3>
      {display ? console.log('check') : null}
    </div>
  );
}
