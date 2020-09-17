import React,{ useState, useReducer } from "react"

import { initialTodoState, todoReducer } from "../Reducers/todoReducer"

const Todo = () =>{
    const [state, dispatch] = useReducer(todoReducer, initialTodoState);
        console.log("state", state)

        render() {
            console.log('rendering form');
            return (
              <form onSubmit={this.submitItem}>
                <input
                  type="text"
                  value={this.state.item}
                  name="item"
                  onChange={this.handleChanges}
                />
                <button>Add</button>
              </form>
            );
          }
          
   
}

export default Todo;