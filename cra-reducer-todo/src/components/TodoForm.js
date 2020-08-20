import React, {useState} from 'react';

const TodoForm = (props) => {
     const [newTodo, setNewTodo] = useState('');

     const handleChanges = e => {
         setNewTodo(e.target.value)
     };

     const handleSubmit = e => {
         e.preventDefault();
         props.dispatch({type:'ADD_TODO', payload: newTodo});
         setNewTodo('');
     }

     return (
         <form onSubmit={handleSubmit}>
             <input 
             type='text'
             value={newTodo}
             onChange={handleChanges}
             placeholder='add new task'
            />
            <button>Add New Task</button>
            {/* <button onClick={props.dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</button> */}
            </form>

     )
}

export default TodoForm
