// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useReducer } from 'react'

import Todo from './Todo'

import {initialList, reducer} from '../reducers/reducers'

// import './Todo.css'

const TodoList = props => {
    const [state, dispatch] = useReducer(reducer, initialList)

    console.log(state)
    return (
        <div className="todo-list">
            {state.map(item => (
                <Todo 
                key={item.id} item={item} 
                toggleItem={props.toggleItem} 

                />
            ))}
            <button 
            className='clear-btn' 
            onClick={props.clearFinished} 
            >
          
            Clear ToDo-List
            </button>
        </div>
    )
}
export default TodoList