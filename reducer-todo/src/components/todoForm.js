import React, { useReducer} from 'react'


export default function TodoForm() {
    const [state,dispatch] = useReducer()
    
      
   const   handleSubmit = (e) => {
        e.preventDefault();
        handleItemAdd(state.inputValue);
        state({
          inputValue:""
        });
      }
  const     handleClick = ()=> {
       handleItemCompleted(todos);
      }

    return (
        <form onSubmit={handleSubmit}>
        <input value={state.inputValue} onChange={handleChange} type="text" name="item" />
        <button>Add Task</button>
        <button onClick={handleClick}>Clear</button>
      </form>
    )
}
