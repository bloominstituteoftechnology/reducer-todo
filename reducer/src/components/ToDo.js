import React, {useState} from 'react';

const ToDo = (props) => {

  const [currentTodo, setCurrentTodo] = useState("");
  
  const handleChange = (event) => {
    setCurrentTodo(event.target.value);
  }

  const handleDelete = (event) => {
      event.preventDefault();
      props.dispatch({type: 'CLEAR_COMPLETED'});
  }

    return (
        <div>
            <form onSubmit={(event)=>{
            event.preventDefault();
            props.dispatch({type: 'ADD_TODO', payload: currentTodo});
            setCurrentTodo("");
        }}>
              <label>Add New To Do: <input name="todo" onChange={handleChange} value={currentTodo} /> </label>
            </form>
            <button onClick={handleDelete}>Clear Completed Tasks</button>
        </div>
    )
}

export default ToDo