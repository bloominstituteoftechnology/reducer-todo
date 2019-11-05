import React from 'react';

const TodoForm = () => {
    return (
        <div>
            <form>
                <label>Add Todo: </label>
                <input type="text"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;