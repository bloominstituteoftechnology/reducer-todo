import React from 'react';



const TodoList = (props) => {
    console.log('from TL', props);

    const toggleCompleted = e => {
        e.preventDefault();
        props.toggle();
    }


    return (
        <div>
            <h2 onChange={toggleCompleted}>
                {props.tasks.item}
            </h2>
        </div>
    )
};

export default TodoList;