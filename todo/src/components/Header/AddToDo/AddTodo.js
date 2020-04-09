import React, { useRef } from 'react';
import { Button } from 'reactstrap';



function AddTodo(props) {

    const todo = useRef()
    const addToDo = (e) => {
        e.preventDefault();
        props.dispatch({type:"ADD-TODO", payload: todo.current.value})
        todo.current.value = "";
    }
    return (
    <div className="addToDo">
        <form onSubmit={addToDo}>
            <input type='text' placeholder="Add a todo" ref={todo}/>
            <Button color='primary' type='submit'>Submit</Button>
        </form> 
    </div>
    );
}

export default AddTodo;
