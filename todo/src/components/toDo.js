import React, {useState, useReducer} from "react";
import {intitalState, toDoReducer} from "../reducers/toDoReducer"


const List = (props) => {
    const [newItem, setNewItem] = useState()
    const [state, dispatch] = useReducer(toDoReducer, intitalState)

const handleChanges = (e) => {
    setNewItem(e.target.value)
}


    return(
        <div>
            <p>{state.item}</p>

        <div>
            <input
            type="text"
            name="newItem"
            value={newItem}
            onChange={handleChanges}
            />
        </div>
        </div>


    )
}

export default List