import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.completed ? '-completed' : ''}`}
      // onClick={props.handleComplete()}
    >
      <p>{props.item.todo}</p>
    </div> //^^^^^^^^^ finished payload through reducer.
    //this is what is seen when user adds a todo after flowing from the dispatch through the reducer.
  );
};

export default Todo;