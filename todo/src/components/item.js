import React, { useReducer, useState } from 'react';
import {initialTodoState, todoReducer} from '../reducer';
import filterReducer from '../reducer/filter';
import cuid from 'cuid';




const Item = () => {


    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

    const [itemState, dispatch] = useReducer(todoReducer, initialTodoState);

  const [item, setTask] = useState('');

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' });
  };

  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' });
  };

  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' });
  };

    const handleChanges = todo => {
        dispatch({
          type: todo.complete ? 'UNDO_TODO' :'DO_TODO'  ,
          id: todo.id
        });
      };

      const handleChangeInput = event => {
        setTask(event.target.value);
      };
    
      const handleSubmit = event => {
        dispatch({
            type: "ADD_TODO", 
            payload: {
                item: item,
                complete: false,
                id: Date.now()

            }
        })
        setTask('');
     
        event.preventDefault();
      };


      const filteredTodos = itemState.filter(todo => {
        if (filter === 'ALL') {
          return true;
        }
    
        if (filter === 'COMPLETE' && todo.complete) {
          return true;
        }
    
        if (filter === 'INCOMPLETE' && !todo.complete) {
          return false;
        }
    
        return true;
      });

    return (
        <div>
  <div>
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button type="button" onClick={handleShowComplete}>
          Show Complete
        </button>
        <button type="button" onClick={handleShowIncomplete}>
          Show Incomplete
        </button>
      </div>
             <ul>
             {filteredTodos.map((todo) => (
          <li key={cuid()}>
            <label>
              <input
              type="checkbox"
                checked={todo.complete}
                onChange={() => handleChanges(todo)}
              />
              {todo.item}
            </label>
          </li>
        ))}
      </ul>
 
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={handleChangeInput}
        />
        <button type="submit">Add Todo</button>
      </form>

      </div>

    )

      
}


export default Item;