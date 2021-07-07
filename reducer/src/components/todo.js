import React, {useReducer} from 'react';
import { initialState, reducer, showReducer, ADD_TODO, INPUT_RESET, UPDATE_TEXT, TOGGLE, reducerString, initialText, initialSetShow, VISIBILITY } from '../reducers/reducer';
import Form from './Form';
import VisibilityControl from './VisibilityControl';
import TodoRow from './TodoRow';
import TodoTable from './TodoTable';

export default function Todos(){

    const [todoItems, dispatch] = useReducer(reducer, initialState);
    const [newItemItext, itemDispatch] = useReducer(reducerString, initialText);
    const [showCompleted, showDispatch] = useReducer(showReducer, initialSetShow);

    const createNewTodo = () => {
        if(!todoItems.find(item => item.action === newItemItext)){
            const payload = {action: newItemItext, completed: false}
            dispatch({type: ADD_TODO, payload: payload})
            itemDispatch({type: INPUT_RESET});
        }
    }

    const updateNewTextValue = (evt) => {
        const updatePayload = evt.target.value;
        itemDispatch({type: UPDATE_TEXT, payload: updatePayload});
    }

    const toggleTodo = (todo) => {
        const togglePayload = todo;
        dispatch({type: TOGGLE, payload: togglePayload})
    }

    const todoTableRows = (doneValue) => todoItems.filter(item =>
        item.completed === doneValue).map(item =>
        <TodoRow key={item.action} toggleTodo={toggleTodo} item={item}/>
        );




    return (
        <div>
        <Form newItemItext={newItemItext} updateNewTextValue={updateNewTextValue} createNewTodo={createNewTodo}/>
        <TodoTable todoTableRows={todoTableRows}/>
        <VisibilityControl description="Completed Tasks" isChecked={showCompleted} callback={(checked) => showDispatch({type: VISIBILITY, payload: checked})}/>
        <h4>All tasks</h4>
        {
            todoItems.map((todo) => {
            return <div key={todo.id}>
                {todo.action}
                <input type="checkbox" checked={todo.completed} onChange={ () => toggleTodo(todo)}/> 
            </div>}
            )
        }
        {showCompleted && <table>
                <thead>
                    <tr><th>Completed Tasks</th></tr>
                </thead>
                <tbody>
                    {todoTableRows(true)}
                </tbody>
            </table>}
        </div>

        
    );
}