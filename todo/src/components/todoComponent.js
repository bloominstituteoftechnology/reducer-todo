import React, {useState,useReducer} from 'react';
import {todoReducer,initialState,Toggle_Todo,Add_Todo,Clear_Completed} from '../reducers/todoReducer';
import { TodoList } from './TodoList';
// import TodoForm from './todoForm';

export const Todo=()=>{
const [state,dispatch]=useReducer(todoReducer,initialState)   
const [task,setTask]=useState(state.todo);
// const [todoList,setTodoList]=useState([]);
const handleChange=((e)=>{
   setTask(e.target.value)
})
const handleSubmit=((e)=>{
    e.preventDefault();
    // state.todoList.push(task)
    setTask('')
})

const toggled=id=>{
    return state.map(item=>{if (item.id===id){return dispatch({type:Toggle_Todo,payload:item.id})} else return item})
    }

console.log(state)
// console.log(todoList)
return(
    <div>
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='todo'
        placeholder='new todo'
        value={task}
        onChange={handleChange}
        />
        <button onClick={()=>{dispatch({type:Add_Todo,payload:task})}}>Add Todo</button>
        <button onClick={()=>{dispatch({type:Clear_Completed})}}>Clear Completed</button>
    </form>
    {/* <div>
        <ul>
            {state.map(task=>{return <li key={task.id} onClick={()=>toggled(task.id)}>{task.todo}</li>})}    
        </ul>
    </div> */}
    <TodoList todos={state} toggled={toggled}/>
</div>
)
    // <TodoForm/>


}
