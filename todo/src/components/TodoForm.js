import React from 'react';
import TodoList from './TodoList'

const TodoForm = () =>{

    return(
        <div>
            <form>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.handleChange} 
                    type='todo' 
                    name='todo'
                    placeholder='...todo'
                />
                <button onClick={this.handleSubmit} >Add Todo</button>
                <button className='clear-btn' onClick={this.handleClear} >Clear Completed</button>
            </form>
            <TodoList />
        </div>
        )
        
        
};

export default TodoForm;