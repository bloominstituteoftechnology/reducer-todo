import React from 'react';

const Todos = props => {
    console.log(props)
  return (
    <div className= {`todo${props.Todos.completed ? ' completed' : ''}`}
    onClick={()=>props.toggleItem(props.Todos.id)}
    >
      <p>{props.Todos.item}</p>
      
    </div>
  );
};

export default Todos;