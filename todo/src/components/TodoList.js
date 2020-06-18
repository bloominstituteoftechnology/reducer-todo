import React from 'react';

import Todo from '../components/Todo';

const TodoList = props => {
    console.log(props);
  return (
    <div className="todo-list-container">
      {props.toDo.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
        
      ))}
      <button className="complete-btn" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
//dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
export default TodoList;