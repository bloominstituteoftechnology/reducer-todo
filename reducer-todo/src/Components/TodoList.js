import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';

const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer,initialState);
    console.log(props.state[0].item)
    return(
        <div>
            <h1>TODO LIST</h1>
            <h2 className="addedTask">
                 {props.state.map((element) =>  {
                    return <li className={`item${element.item.completed ? " Done" : ""}`}  onClick={() => dispatch({ type: 'TOGGLE_DONE'})} key={element.id}>
                    {element.item}
                    </li> })}
            </h2>
            <button>Clear Done</button>
        </div>
    )
}

export default TodoList;
//className={`item${}`}