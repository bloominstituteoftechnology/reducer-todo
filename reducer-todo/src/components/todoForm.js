 import React from 'react'
 import reducer, { initialState } from "../reducer/reducer"

 let currentState = reducer(initialState,{type:"ADD_TODO",payload:"walk dog"})
 currentState = reducer(currentState, {type:"EDIT_TODO", payload:true})
 console.log(currentState)

const onClick = (e) =>{
    e.preventDefault()
}

const todoForm = () => {
    return (
        <div className="form-container">
          <form className="form">
              <label>
                TODO
                 <input 
                 
                //   onChange={onChange}
                  name= "todo"
                  type= "text"
                  />
              </label>
          </form>
          <div className="btn">
              <button onClick={onClick}>
                  Clear todo
              </button>
               <button>
                   Add Todo
               </button>
          </div>
          
            
        </div>
    )
}

export default todoForm
