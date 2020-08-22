import { 
    reducer, 
    initialState, 
    NEW_TODO, 
    TOGGLE_TODO,
    FILTER_COMPLETED_TODOS 
} from "../reducers/reducer";
import React,{useReducer,useState} from 'react';
import {TodoList} from './todoList';

export const TodoForm=()=>{
    const [newTodo,setNewTodo]=useState('');
    const [state,dispatch]= useReducer(reducer,initialState);

    const handleChanges=e=>{
        setNewTodo( e.target.value)
    };

    const submitTask=e=>{
        e.preventDefault();
        //     // this.props.addTask(this.state.task)
    // add function to toggle map and if statement
        // // add task to screen 
            setNewTodo('');
    };

    const toggled=id=>{
        return(state.map(item=>{
            if(id===item.id){
                return dispatch({type:TOGGLE_TODO, payload:item.id})
            }
            return item;
        }))
    }

    console.log(state)
        return(
        <div>
            
            <form 
            onSubmit={submitTask} 
            className="form">
            <input id="input"
                type='text' 
                placeholder='things to do...'
                name="task"
                value={newTodo}
                onChange={handleChanges}    
            />
            <button onClick={()=>{dispatch({type:NEW_TODO, payload:newTodo})}}>Add to do</button>
            <button onClick={()=>{dispatch({FILTER_COMPLETED_TODOS})}}>clear completed</button>  
            </form> 
            <TodoList todos={state} toggled={toggled}/>
            
        </div>
        )
    }
    