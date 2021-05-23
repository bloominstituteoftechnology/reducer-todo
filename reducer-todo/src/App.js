

import React from 'react';
import TodoForm from './components/ToDoForm';

// build your initial state object that has a list of todos with the following shape:
const initialTodos = [
    {
      item: 'Learn about reducers',
      complete: false,
      id: '3892987589',
    },
    {
      item: 'Learn about reducers',
      complete: false,
      id: '3892987589',
    },
  ];

//   ### STEP 1 - Build a simple reducer and initial state
  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'DO_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, complete: true };
          } else {
            return todo;
          }
        });
        case 'ADD_TODO':
            const newTodo = {
                item:'' ,
                complete: false,
                id: Date.now()
            };
            return {...state, newTodo};
      case 'UNDO_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, complete: false };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };


const App = () => {
    // ### STEP 2 - Set up state in your component. Using the `reducer` hook, set up state in your component.
    const [todos, newTodo, dispatch] = React.useReducer(
      todoReducer,
      initialTodos
    );
    const handleChange = todo => {
      dispatch({
        type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
        id: todo.id,
      });
      dispatch ({
          type: 'ADD_TODO',
      })
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch ({
            type: 'ADD_TODO',
        })
        
       
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
                <label htmlFor="task">New ToDo</label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={newTodo}
                    onChange={()=> handleChange()}
                />
                <button>Add</button>
            </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
              {todo.item}
            </label>
          </li>
        ))}
      </ul>
      </>
    );
  };

  export default App;