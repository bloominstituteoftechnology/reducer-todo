import React from 'react';



const TodoList = (props) => {
    console.log('from TL', props)


    return (
        <div>
            <h2>
                {props.tasks.item}
            </h2>
        </div>
    )
};

export default TodoList;