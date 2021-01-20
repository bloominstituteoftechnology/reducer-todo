import { React, useState }from 'react'



export default function TodoForm(props) {
    const [item,setItem]=useState('');
    
    const handleChange=(e)=>{
        setItem(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.dispatch ({type:"ADD_TODO", payload:item});
        setItem('')
    }
    return (
        <div>
            <h2>Add a todo: </h2>
            <span><input type="text"onChange={handleChange}/></span>
            <button onClick={handleSubmit}>add your todo</button>
        </div>
    )
}
