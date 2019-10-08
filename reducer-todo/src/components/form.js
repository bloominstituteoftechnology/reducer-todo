import React from "react"
import {initialState, reducer} from '../reducers/todoReducer.js'

export default function Form () {
    

    return (
        <div className="form-container">
            <form>
                Add To-do Item:
                <input type="text" name="todo-item" placeholder="Enter Here"/>
            </form>
            <button>Add Item</button>
            
        </div>
    )
}