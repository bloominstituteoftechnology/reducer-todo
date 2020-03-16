import React, { useReducer} from 'react';
import { TodoForm } from './component/TodoForm';
import { TodoList } from './component/TodoList';
import './style/App.scss';
import { initialState, reducer } from './reducers/reducer';

function App() {
// Declare state and dispatch with reducer (form functions)
    const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state);

// Actions, calling to the reducer functions through dispatch to manipulate the state
    const addTodo = (input) => {
        const newTodo = {
            todo: input,
            completed: false,
            id: new Date()
        }
        dispatch({type:"ADD_TODO", payload: newTodo})
    }

    const handleComplete = (id) => {
        dispatch({type:"COMPLETED_TODO", payload: id})
    }

    const clearCompleted = () => {
        dispatch({type: "CLEAR_COMPLETED_TODO"})
    }

return (
        <div className="App">
            <h2>React Todo App</h2>
            <p></p>
            <TodoForm addTodo={addTodo} />
            <TodoList state={state} handleComplete={handleComplete} />

            <button className="ClearButton" 
                onClick={(event) =>{
                    event.preventDefault();
                    clearCompleted();}}
            >Clear Completed</button>

        </div>
    );

}

export default App;
