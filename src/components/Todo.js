import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import TodoList from './TodoList';

const Todo = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoItem, setNewTodoItem] = useState ('';
    
    const handleChange = e => {
        setNewTodoItem(e.target.value);
    }
}