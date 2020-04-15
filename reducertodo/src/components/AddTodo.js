import React, { useState } from 'react';

function AddTodo(props) {
    // console.log(props);
    // props.state.tasks.map((itemInfo) => console.log(itemInfo.item));

    const [state, setState] = useState({
        name: '',
        completed: false,
        id: Math.random() * 999999,
    });
    const handleChanges = (event) => {
        event.preventDefault();
        setState(event.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        props.addItem(state);
    };
    return (
        <form onSubmit={submitForm}>
            <input
                item="item"
                placeholder="Add Todo Item"
                value={state.tasks}
                onChange={handleChanges}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default AddTodo;
