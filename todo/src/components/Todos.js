import React, { useReducer } from 'react';
import uuid from 'uuid';
const todoList = [];
const todoItem = '';
const initialState = { todoItem, todoList };
const ADD_TASK = 'addTask';
const ON_INPUT_CHANGE = 'onInputChange';
function reducer(state, action) {
    switch (action.type) {
        case ON_INPUT_CHANGE: {
            return { ...state, todoItem: action.payload };
        }
        case ADD_TASK: {
            const taskToAdd = {
                id: uuid(),
                name: state.todoItem,
                completed: false,
            }
            return {
                ...state,
            todoList: [...state.todoList, taskToAdd]}
        }
        default:
            return state.todoList;
    }
};
const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const onInputChange = event => {
        dispatch({
            type: ON_INPUT_CHANGE,
            payload: event.target.value,
        });
    };
    const addTask = event => {
        event.preventDefault();
        dispatch({ type: ADD_TASK });
    };
    return (
        <div>
            <h3>Tasks</h3>
            {
                state.todoList.length
                    ? state.todoList.map((todo, index) => 
                        <div key={index}>
                            <span>{todo.name}</span>
                            <button>Toggle completed</button>
                        </div>)
                    :<div>No Task</div>
            }
            <form>
                <input
                    type='text'
                    placeholder='Enter Task'
                    value={state.todoItem}
                    onChange={onInputChange}
                    name='task'
                />
                <button onClick={addTask}>Add Task</button>
            </form>
        </div>
    )
};
export default Todos;