import React from 'react';
import Item from './Item';

const TodoList = (props) => {

  return (
    <div>
      {props.state?.todos?.map(item => {
        return <Item key={item.id} dispatch={props.dispatch} item={item}/>;
      })}
      <button onClick={() => props.dispatch({ type: "CLEAR_COMPLETED", payload: props.state.todos.item })}>Clear</button>
    </div>
  );
};

export default TodoList;