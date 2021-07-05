import React, { useReducer, useState } from "react";

const TodoForm = props => {
  // const [form, setForm] = useState({
  //   item: "",
  //   completed: false,
  //   id: null,
  // });

  const [form, setForm] = useState('')

  // const handleChange = e =>  {
  //   setForm({
  //     ...form, 
  //     item: e.target.value,
  //     id: Date.now(),

  //   })

  // }

  const handleChange = e => {
    // console.log(form)
    setForm(e.target.value)
  }

  const addItem = e => {
    console.log(props.dispatch)
    e.preventDefault();
    props.dispatch({ type: "TODO_ADD", payload: form }); // onSubmit sends payload 
                                                          // to the Reducer.js
  }
console.log(form)
  return (
  // dispatch function onSubmit so the user can fire it
  <form onSubmit={addItem}> 
    
    <input onChange={handleChange}
     type= 'text'
     value= {form}/>
     <button>Add Thing</button>
  </form>
  
  );
};

export default TodoForm;
