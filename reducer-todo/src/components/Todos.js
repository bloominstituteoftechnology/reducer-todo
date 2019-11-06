import React, {useReducer, useState} from 'react'
import {appReducer, initialState} from '../reducers/Reducers'
import TodoCard from './TodoCard';



const Todos = () => {
    const [state, dispatch] = useReducer(appReducer, {initialState} );
    const [item, setItem] =useState([{}])

    const handleChange = e => {
        console.log(e.target.name, e.target.value);
        setItem(e.target.value);
    }


    addTask = title =>{
        const newTask ={
          item: title,
          id: Date.now(), 
          completed: false
        }
        this.setState({
          todos: [...this.state.todos, newTask]
        })
      } 





    const add = () => {
        
        dispatch({type: "ADD_TODO", payload: item})
        

    }
    





    return(
        <div>
            <div>
                {initialState.map(data => (
                <TodoCard
                item = {data.item}
                id = {data.id}
                completed = {data.completed}
                />  
                ))} 
                <TodoCard
                
                item = {item}
                id = {id}
                completed = {completed}/>
            </div>

            <div>
                <form>
                    <input type= 'text' name='item' value={item} onChange={handleChange}/>
                    <button type='submit' onClick={add}>Submit</button>                
                </form>
            </div>
        </div>


       
)

        

       
    
}

export default Todos;