import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import Todo from './Todo';

const TodoItem = props => {
    // const [state, dispatch] = useReducer(todoReducer,initialState);
    console.log(props)
    console.log('state ',props.state)
    // return (
    //     <div>
    //         {props.state.map(note => (
                
    //             <Todo
    //             task={note.item}
    //             completed={note.completed}
    //             id={note.id}
    //             key={note.id}
    //             />
    //         ))}
    //     </div>
    // )

}

export default TodoItem;