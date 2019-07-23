import React from 'react';
import './App.css';
import {mainReducer} from './reducers/mainReducer'
import {StateProvider, initialState} from './state/StateProvider'
import {AddForm} from './components/AddForm'
import {ToDoList} from './components/ToDoList'

function App() {
    return (
        <StateProvider initialState={initialState} reducer={mainReducer}>
            <AddForm />
            <ToDoList />
        </StateProvider>
    );
}

export default App;
