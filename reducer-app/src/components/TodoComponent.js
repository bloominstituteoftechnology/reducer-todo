import React from 'react';
import './todocomponent.styles.css'



const Todo = props => {
  const {toggleComplete} = props;
  const { id, item, completed } = props.todo;
console.log(props.todo)
  return (
    <div className='test'><h5
      style= {{background: completed ? 'rgb(188,70,40, .9)' : 'none' }}
      onClick={() => toggleComplete(id)}
    >
      {item}
    </h5></div>
  );
};

export default Todo;