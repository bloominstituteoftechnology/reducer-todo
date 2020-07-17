import React, { useState } from 'react';


const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = event => {
        setNewTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.dispatch({ type: 'ADD_TODO', payload: newTodo })
        setNewTodo('');
    }

    return (
        <div className="todoFormParent">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="item"
                    value={newTodo}
                    onChange={handleChanges}
                    placeholder="Enter Todo"
                />
                <button className="addButton"> Add </button>
            </form>

        </div>
    )
}

export default TodoForm;

//onClick={() => dispatch({type:'LOG_TODO', payload: state.item})} 