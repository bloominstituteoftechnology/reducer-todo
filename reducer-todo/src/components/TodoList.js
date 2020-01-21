// Dependencies
import React from "react";
// Components
import TodoItem from './TodoItem';


const TodoList = (props) =>  {
  console.log('Props: ', props)

  return (
    <div>
      {props.state.map(item => (
        <TodoItem key={item.id} item={item} dispatch={props.dispatch} />
      ))}
    </div>
  );
}
export default TodoList


