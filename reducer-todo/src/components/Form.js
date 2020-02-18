import React, {useState} from 'react';


export default function Form(props){
console.log("I am props from form", props)


// const[state, setState] = useState({
//     newTodo: ''
// })

// const handleChanges = (e) => {
//     setState({newTodo:e.target.value})
//  }

// const handleSubmit =(e) =>{
//     e.preventDefault()
//     props.addNewTodo(state)
//     setState('')        
// }



const[state,setState] = useState('')

    const handleChanges = (e) => {
        setState(e.target.value)
     }

     const handleSubmit =(e) =>{
         e.preventDefault()
         props.addNewTodo(state)
         setState('')
     }

    
    
    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <input
                type = "text"
                name = "newTodo" 
                placeholder = "add todo"
                value = {state}
                onChange = {handleChanges}
                />
                <button>Add new todo</button>
           </form>

        </div>
    )
}