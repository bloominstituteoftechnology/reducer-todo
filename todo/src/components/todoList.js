import React from "react";
import Todo from './todo';

const TodoList = (props) => {

    const {todos, toggleComplete} = props;

    return (
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
      );

};

export default TodoList;