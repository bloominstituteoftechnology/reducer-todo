import React, {useReducer} from "react";
import { initialState, reducer } from "../Reducers/Reducer";


const Todo = () => {
    const [state, dispatch] = useReducer(initialState, reducer);
  return (
    <div className='todo-list'>
            {state.map(todo => {
                return (
                    <div style={todo.completed ? {textDecoration:'line-through'} : null} key={todo.id} >
                        <p onClick={() => {dispatch({ type: 'TOGGLE_COMPLETED', payload: todo.id })}}>{todo.item}</p>
                    </div>
                )
            })}
        </div>
  );
};

export default Todo;
