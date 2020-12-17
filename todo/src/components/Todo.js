import React, { useState, useReducer } from 'react';
import TodoReducer from '../reducers/TodoReducer';
import actions from "../actions/todoActions";

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');

  const initialState = 
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(actions.toggleEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => dispatch(actions.updateTitle(newTodo))}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;