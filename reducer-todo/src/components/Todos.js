import React, {useReducer, useState} from 'react'
import {reducer, initialState} from '../reducers/Reducers'
import TodoCard from './TodoCard';


const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState );
    const [newItem, setNewItem] =useState({initialState})

    const handleChange = e => {
        setNewItem(e.target.value);
    }


    return(
        <div>
            <div>
                {state.map(data => (
                <TodoCard
                item = {data.item}
                id = {data.id}
                completed = {data.completed}
                dispatch = {dispatch}
                />  
                ))} 

               
            </div>

            <div>
                <form onSubmit= {(e) => {
                    e.preventDefault();
                        dispatch({ type: 'ADD_TODO', payload: newItem})
                    }}>
                    <input type= 'text' name='item' value={newItem.item} onChange={handleChange}/>
                    <button 
                    
                    type='submit' >Submit</button> 
                    <button
                    onClick= {(e) => {
                        e.preventDefault();
                            dispatch({ type: 'COMPLETED'})
                        }}
                    >Clear Completed</button>               
                </form>
            </div>
        </div>     
)   
}

export default Todos;