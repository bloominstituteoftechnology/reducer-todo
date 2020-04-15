import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleItem = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    let newId = 0;
    const addItem = (item) => {
        const newItem = {
            item: item,
            completed: false,
            id: newId++,
        };
        dispatch({ type: 'ADD_TODO', payload: newItem });
    };
    return (
        <div className="App">
            <section>
                <h1>React useReducer</h1>
                <AddTodo state={state} addItem={addItem} />
                <TodoList state={state} toggleItem={toggleItem} />
            </section>
        </div>
    );
}

export default App;
