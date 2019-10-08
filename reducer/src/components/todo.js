import React, {useReducer, useState} from 'react';
import { initialState, reducer, ADD_TODO } from '../reducers/reducer';
import Form from './Form';

export default function Todos(){
    // const [todos, dispatch] = useReducer(reducer, initialState);
    // const [todoItems, setTodoItems] = useState(initialState);

    const [todoItems, dispatch] = useReducer(reducer, initialState);
    const [newItemItext, setNewItemText] = useState('');

    // const onFormSubmit = event => {
    //     dispatch({
    //         type: ADD_TODO
    //     })
    // }

    const createNewTodo = () => {
        if(!todoItems.find(item => item.action === newItemItext)){
            const payload = {action: newItemItext, completed: false}
            // setTodoItems([...todoItems, payload]);
          
            dispatch({type: ADD_TODO, payload: payload})
            setNewItemText('');
        }
    }

    const updateNewTextValue = (evt) => {
        setNewItemText(evt.target.value);
    }




    return (
        <div>
        {/* <form className='component' onSubmit={createNewTodo}>
        <input />
        </form> */}
        <Form newItemItext={newItemItext} updateNewTextValue={updateNewTextValue} createNewTodo={createNewTodo}/>
        {
            todoItems.map((todo) => {
            return <div key={todo.id}>
                {todo.action}
            </div>}
            )
        }
        </div>
    );
}