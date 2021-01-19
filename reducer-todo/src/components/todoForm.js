 import React from 'react'

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
