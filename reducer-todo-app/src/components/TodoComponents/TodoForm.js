import React, {useState} from 'react'

const TodoForm = ({addTodo,clearCompleted}) => {
    const [item,setItem] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        addTodo(item);
        setItem('')
    };
    const handleClear = event => {
        event.preventDefalut();
        clearCompleted();
        
        }
    return (
        <form>
            <input onSubmit={handleSubmit}
                type ='text'
                placeholder='new todo'
                name = 'input'
                onChange = {e => setItem(e.target.value)}
                value = {item}
            />
            <div>
                <button type='submit'>Add</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </form>
    );
};

export default TodoForm