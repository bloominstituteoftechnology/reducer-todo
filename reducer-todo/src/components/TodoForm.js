import React, {useState} from 'react';


const TodoForm = props => {
    const [input, setInput] = useState('');
    const handleChanges = e => {
        setInput(e.traget.value);
    };
    const submitHandler = e => {
        e.preventDefault();
        props.addItem(input);
        setInput('');
    };
    const clearItems = () => {
        props.clearItems();
    };

    return (
        <div>
        <form onSubmit={submitHandler}>
            <input
              value={input}
              onChange={handleChanges}  
              type="text"
              placeholder="Add item"
            />
            <button onClick={clearItems}>Clear Completed</button>
        </form>
        </div>
    );
};
export default TodoForm;