import React from 'react';
import Item from './Item';

const TodoList = (props) => {

  return (
    <div className="item-list">
      {props.state?.todos?.map(item => {
        return <Item key={item.id} dispatch={props.dispatch} item={item}/>;
      })}
      <button className="clear-btn" onClick={() => props.dispatch({ type: "CLEAR_COMPLETED", payload: props.state.todos.item })}>Clear</button>
    </div>
  );
};

export default TodoList;