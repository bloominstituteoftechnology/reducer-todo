import React, {useState} from 'react';

const Todo = (props) => {

  const [currentTodo, setCurrentTodo] = useState("");

  const handleChange = (event) => {
    setCurrentTodo(event.target.value);
  }

  const handleDelete = (event) => {
      event.preventDefault();
      props.dispatch({type: 'CLEAR_COMPLETED'});
  } 
  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: "ADD_TODO", payload: currentTodo });
  };

    return (
        <div>
            <form onSubmit={(event)=>{
            event.preventDefault();
            props.dispatch({type: 'ADD_TODO', payload: currentTodo});
            setCurrentTodo("");
        }}>
              <label>Add Item: <input name="todo" onChange={handleChange} value={currentTodo} /> </label>
            </form><br/>
            <button onClick={handleSubmit}>Add Item</button><br/>

            <button onClick={handleDelete}>Clear Completed Tasks</button>
        </div>
    )
}

export default Todo 