import React, {useState, useReducer} from 'react';
import {TOGGLE_COMPLETE, initialTodoState, todoReducer} from '../reducer';

const Item = () => {


    const [itemState, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodoItem, setNewTodoItem] = useState(initialTodoState.item);

    const handleChanges = e => {

        setNewTodoItem(e.target.value);

    };

    return (

        <div>

            {!itemState.completed ? (
                <h1> 
                    {itemState.item}{" "}
                <i 
                onClick={() => {

                        dispatch({ type: TOGGLE_COMPLETE});

                }}
                />
            </h1>

            ) : (
<div> 

        <input
        type="text"
        name="newItemText"
        value={newTodoItem}
        onChange={handleChanges}
        />

            <button
            onClick={() => {

                dispatch({ type: "END_ITEM_UPDATE", payload: newTodoItem})

            }}
            >
                Update item
            </button>
        </div>
            )}
        </div>
    )

}


export default Item;