import React from 'react';
import {initialState, reducer} from "./reducers/reducer";

const TodoForm = () => {
    const [newChore, setNewChore] = useState("");

    handleChanges = e =>{
        e.preventDefault()
        setNewChore(e.target.value);
    }

    return (
    <div>
        <input
            type="text"
            name="newTodo"
            value={newChore}
            onChange={handleChanges}
        />
        <button
            onClick={() =>
                dispatch({ type: 'ADD_CHORE', payload: newChore })
            }
            >
        Add Chore</button>
    </div>
)
};


export default TodoForm;