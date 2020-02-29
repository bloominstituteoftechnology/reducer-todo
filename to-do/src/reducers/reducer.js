import React, {useReducer} from 'react';

const initialState = {
    item: 'Learn About Reducers',
    completed: false,
    id: 1001
}

const todoReducer = (state, action) => {
    return state
};

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);

    return (
        <div>
            <h1>To Do!</h1>
            <ol>
                <li>{state.item}</li>
            </ol>
            
        </div>
    )
}

export default Todo;