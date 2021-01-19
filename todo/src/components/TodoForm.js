import React, { useReducer } from 'react';
import TodoList from './TodoList'
import reducer, { initialState } from './reducers/index';
import { setAddTodo, setToggleCompleted, setNewTodo } from './actions/index';


const TodoForm = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTodo = e =>{
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
        dispatch();
    }



    //   handleClearCompleted = () =>{
    //     const newTodo = this.state.todo.filter(todo=>{
    //       return(!todo.completed);
    //     })
    //     this.setState({
    //       todo: newTodo
    //     })
    //   }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    value={state.newTodo} 
                    onChange={handleAddTodo} 
                    type='todo' 
                    name='todo'
                    placeholder='...todo'
                />
                <button onClick={this.handleSubmit} >Add Todo</button>
                <button className='clear-btn' onClick={this.handleClear} >Clear Completed</button>
            </form>
            <TodoList state={state.todo} />
        </div>
        )
        
        
};

export default TodoForm;