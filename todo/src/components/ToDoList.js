import React from 'react';
import ToDo from './ToDo';


export const ToDoList = (props) => {
  
    console.log(props);
    return (
      <div className='list'>
        {
          props.todos.map(entry => {
            return(
              <ToDo entry={entry} key={entry.id} dispatch={props.dispatch}/>
            )
          })
        }
      </div>
    );
}

export default ToDoList;
