import React from "react";


function Todos(props) {
    const {state, dispatch} = props;
    
    return (
      <div>
          {
              state.todo.map(task =>{
                  
                //   console.log(task.completed)
                  return <div 
                        onClick={()=>{
                            dispatch({type: 'TOGGLE_COMPLETED', payload: task})
                        }}  
                         className={`todo${task.completed ? ' completed' : ''}`}>

                    <p>{task.task}</p>
                  </div>
            })
              
          }
      </div>
    );
  }
  
  export default Todos;
  