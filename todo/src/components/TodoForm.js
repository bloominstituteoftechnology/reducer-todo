import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/'
import { setAddTodo, setToggleCompleted, setNewTodo, setClearComplete } from '../actions';


const TodoForm = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e =>{
        dispatch(setAddTodo(e.target.value))
    }


    const handleSubmit = e =>{
          e.preventDefault();
          dispatch(setAddTodo(state.newTodo));
          dispatch(setNewTodo(''));
    }

    const toggleCompleted = (id) =>{
        dispatch(setToggleCompleted(id));

    }

    const clearComplete = () =>{
        dispatch(setClearComplete(state.todo));
    }



    //   handleClearCompleted = () =>{
    //     const newTodo = this.state.todo.filter(todo=>{
    //       return(!todo.completed);
    //     })

    return(
        <div>
            <form>
                <input 
                    value={state.newTodo} 
                    onChange={handleChanges} 
                    type='todo' 
                    name='todo'
                    placeholder='...todo'
                />
                <button onClick={handleSubmit} >Add Todo</button>
                <button className='clear-btn' onClick={clearComplete} >Clear Completed</button>
            </form>
            <div className='todo-list'>
                <h1>TODO LIST:</h1>
                {state.todo.map(todos =>{
                    return(
                        <div className='todo-item' onClick={()=> toggleCompleted(todos.id)}>
                            <p key={todos.id}>{todos.item}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
        )
        
        
};

export default TodoForm;