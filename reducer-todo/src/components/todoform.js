import React, {useState} from 'react';

const TodoForm = (props) => {
    const {addTodo, clearTodo} = props;

    const [item, setItem]=useState('');

    const handleChange =e => setItem(e.target.value)


    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(item)
        setItem('')
    }

    const handleClear =e =>{
        e.preventDefault();
        clearTodo();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='item'
                    value={item}
                    onChange={handleChange}
                    placeholder='Add To Do:'
                    />
                    <button type='submit'>Add To Do</button>
                    <button onClick={handleClear}>Clear To Do</button>
            </form>
        </div>
    )
}

export default TodoForm;