import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
  //   console.log('this is props in todolist: ', props);

  return (
    <div>
      {props.state.map((item) => (
        <ToDo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default ToDoList;
