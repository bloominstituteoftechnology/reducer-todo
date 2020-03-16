import React, { useState, useReducer } from 'react';
import { listReducer, initialState } from './reducers/reducer';
import Todo from './Todo'

const TodoList = (props) => {  
    const [state, dispatch] = useReducer(listReducer, initialState);

    return (
      <div className="todo-list">
          <h2>
          Todo List
          <i
            onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}
            className="far fa-edit"
          />
        </h2>
          
        {/* {props.item.map(item => ( */}
          <Todo
            // key={item.id}
            // item={item}
            // toggleCompleted={props.toggleCompleted}
          />
        
        <button className="clear-btn" type='button'>
          Clear Completed
        </button>
      </div>
    );
  };
  
  export default TodoList;