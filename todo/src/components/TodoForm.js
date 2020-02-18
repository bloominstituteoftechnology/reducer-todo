import React, {useState} from 'react';

const TodoForm = (props) =>{
    const [newTask, setNewTask] = useState('');

    // console.log('new task--->', props)
    const changeHandler = e =>{
        setNewTask(e.target.value)
      }

      const handleSubmit = e =>{
          console.log('clicked on handle submit')
        e.preventDefault();
        props.addNewItem(newTask);
        setNewTask('') //clears out input
        
      }

    return(
        <div>
            Hello world
            <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={newTask}
      name="newTask"
      placeholder="type your list"
      onChange={changeHandler}
      />
      <button type="submit">Add</button>
      <button onClick={props.removeList}>Remove</button>

    </form>
        </div>
    )
}

export default TodoForm;