import React, { useState } from 'react';

function ToDoForm(props) {
    console.log(props);
    const [newToDo, setNewToDo] = useState({toDoInput: ''});

    const handleChanges = (evt) => {
      console.log(evt.target);
      const {name, value} = evt.target;
      setNewToDo({...newToDo, [name] : value})
    };
    const onSubmit = (evt) => {
      evt.preventDefault();
      props.dispatch({type: 'ADD_TODO', payload: newToDo});
      setNewToDo({toDoInput: ''});
    };

    return (
      <form className='form' onSubmit={onSubmit}>
        <label>Enter a ToDo:
            <input
                onChange={handleChanges}
                placeholder= 'Add a ToDo'
                name='toDoInput'
                type='text'
                value={newToDo.toDoInput}
            />
            <button type='submit'>Add</button>
            <button onClick={() => {props.dispatch({type: 'CLEAR_COMPLETED'})}}>Clear Completed</button>
        </label>
      </form>
    )
};

export default ToDoForm;