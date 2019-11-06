import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from './reducers/reducer';

const TodoForm = (props) => {
    // const [state, dispatch] = useReducer(todoReducer,initialState);
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = event => {
       setNewTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // setNewTodo('')
        props.dispatch({type:'ADD_TODO', payload: newTodo})
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="item"
                    value={newTodo}
                    onChange={handleChanges}
                    placeholder="Enter Todo"
                />
                <button> Add </button>
            </form>

        </div>
    )
}

export default TodoForm;

//onClick={() => dispatch({type:'LOG_TODO', payload: state.item})} 