import React from 'react';
import '../App.css';


const TodoList = ({dispatch, state}) =>{



    console.log(state)
    return (
        <div>
            {state.todos.map(item => (
                <div key = {item.id} className={`${item.completed ? ' completed' : ''}`} onClick={()=> dispatch({type: "TOGGLE_CHORE", payload: item.id}) } >
                    <p>{item.item}</p>  
                        
                </div>
                
            ))}
        </div>
        
    )
    
}

export default TodoList;