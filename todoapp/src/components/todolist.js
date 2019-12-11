import React from 'react';
import Todos from './Todos';

const TodoList = (props) => {

    return(
        <div className = 'TodoList'>
            {props.state.map(task => (
                <Todos key = {task.id} Todos = {task} toggleItem = {props.toggleItem}/>
            ))}

            {/* <button onClick ={props.clearTasks}> Clear Tasks</button> */}
        </div>
    );
};

export default TodoList;