import React, {useState, useReducer} from "react";
import {intitalState, toDoReducer, ADD_ITEM, DONE, CLEAR} from "../reducers/toDoReducer"


const List = (props) => {
    const [newItem, setNewItem] = useState()
    const [state, dispatch] = useReducer(toDoReducer, intitalState)

const handleChanges = (e) => {
    setNewItem(e.target.value)
}




    return(
        <div>
            {state.list.map(todo => {
                return <p className={`item${todo.completed ? " purchased" : ""}`} onClick={() => dispatch({type: DONE, payload: todo.id})}>{todo.item}</p>
            })}

        <div>
            <input
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
            />
            <button
            onClick={()=>{
                dispatch({
                    type: ADD_ITEM,
                    payload: newItem
                })
            }}>
            Add Item</button>
            <button
            onClick={()=>{
                dispatch({
                    type: CLEAR,
                    payload: newItem
                })
            }}>
            Clear Item</button>
        </div>
        </div>


    )
}

export default List