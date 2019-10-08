import React, {useReducer} from 'react';
import { initialState, reducer } from '../reducers/reducer';

export default function Todos(){
    const [todos, dispatch] = useReducer(reducer, initialState);


    return (
        <div>{
            todos.map((todo) => (
            <div key={todo.id}>
                {todo.item}
            </div>)
            )
        }
        </div>
    );
}