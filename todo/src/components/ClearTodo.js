import React from 'react';

const ClearTodo = (props) => {
    console.log("props ClearTodo", props)
    return <button
        type="button"
        
        onClick={(e) => {
            e.preventDefault()
            props.dispatch({ type: 'REMOVE_TODO', payload: props.todoList.todos })
        }}
        >
            Clear Todos
    </button>
}

export default ClearTodo; 