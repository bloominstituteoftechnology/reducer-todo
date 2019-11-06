import React, {useState} from 'react';
import { initialState } from '../reducers/reducer';

const TodoList = () => {

const [item] = useState (initialState);

  const handleChange = () => {};
  return (
    <div className="list">
      {item.map(task => (
        <p key={task.id}>
          <label type="text"
              onChange={handleChange}>        
            {task.task}
          </label>
        </p>
      ))}
    </div>
  );
};
export default TodoList;