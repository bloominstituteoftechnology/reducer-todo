import React from 'react';



const TodoList = (props) => {
    console.log('from TL', props);

    const toggleCompleted = e => {
        e.preventDefault();
        props.toggle(props.tasks.id);
    }


    return (
        <div>
            <h2 onClick={(e) => toggleCompleted(e)}
                className={props.tasks.completed === true ? 'completed' : ''}>
                {props.tasks.item}
            </h2>
        </div>
    )
};

export default TodoList;