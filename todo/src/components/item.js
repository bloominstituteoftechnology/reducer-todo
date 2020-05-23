import React, { useReducer, useState } from 'react';
import {initialTodoState, todoReducer} from '../reducer';




const Item = () => {


    const [itemState, dispatch] = useReducer(todoReducer, initialTodoState);

  const [item, setTask] = useState('');

    const handleChanges = todo => {
        dispatch({
          type: todo.completed ? 'UNDO_TODO' : 'DO_TODO',
          id: todo.id,
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
                completed: false,
                id: Date.now()

            }
        })
        setTask('');
     
        event.preventDefault();
      };

    return (
        <div>

             <ul>
        {itemState.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
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