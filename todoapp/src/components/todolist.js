import React from 'react';
import Todos from './Todos';

const TodoList = (props) => {

    return(
        <div className = 'TodoList'>
            {props.state.map(task => (
                <Todos key = {task.id} Todos = {task} handleComplete = {props.handleComplete}/>
            ))}

            {/* <button onClick ={props.clearTasks}> Clear Tasks</button> */}
        </div>
    );
};

export default TodoList;