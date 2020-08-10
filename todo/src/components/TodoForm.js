import React from 'react'

const TodoForm = (props) => {

    return(
        <form>
            <div>
                <input onSubmit={props.OnSubmit}
                type="text"
                name="taskText"
                value={props.taskText}
                onChange={props.OnChange}
                />
                <button onClick={props.OnSubmit}>Add Task</button>
            </div>
            <div>
                <button onClick={props.OnComplete}>Clear Task</button>
            </div>
        </form>
    )
}

export default TodoForm