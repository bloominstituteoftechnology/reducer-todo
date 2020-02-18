import React, { useState, useReducer } from 'react';
import Todo from './Todo';
import { reducer, initialState } from '../reducers/reducer';

const Todoform = props => {
    const [newTodo, setNewTodo] = useState('');
    const[state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e =>{
        setNewTodo(e.target.value);
    };
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('to do', newTodo)
        dispatch({ type: 'Add_TODO', payload: newTodo})
    };
const handleDelete = e =>{
    e.preventDefault();
    dispatch({type: "DELETE_TODO", payload: newTodo})

};

return(
    <div>
        <form>
            <input
            id='newTodo'
            type='text'
            name='newTodo'
            value={newTodo}
            onChange={handleChanges}
            />
            <button onClick={handleSubmit}>What To Do? </button>
            <button onClick={handleDelete}>All Done! </button>
        </form>
        <Todo id={state.id} dipatch={dispatch} state={state} newTodo={newTodo}/>
    </div>
);
};
export default Todoform;