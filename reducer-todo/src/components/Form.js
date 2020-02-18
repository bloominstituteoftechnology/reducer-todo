import React, {useState} from 'react';


export default function Form(props){
console.log("I am props from form", props)

const [addItem,setAddItem] = useState("")

//   const newText ={
//     task:{addItem},
//     completed:false,
//     id: Date.now()
//   }

    const handleChanges = (e) => {
       setAddItem(e.target.value)
    }

    // const handleChanges = () => {
    //     setAddItem(props.newText)
    //  }

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.addNewTodo(addItem)
    }
    

    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <input
                type = "text"
                name = "newTodo" 
                placeholder = "add todo"
                value = {addItem}
                onChange = {handleChanges}
                />
                <button>Add new todo</button>
           </form>

        </div>
    )
}