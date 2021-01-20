import React from 'react'

class TodoForm extends React.Component {

    render() {
        return (

<div className="todoForm">
<h1>ToDo List</h1>
<form>
    <label>
        Title:
        <input />
    </label>
    <button>Submit Todo</button>
</form>
</div>
        )
    }
}

{/* <input 
type='text'
placeholder='toDo'
name='todoForm'
onChange={onChange}
value={inputValue}
/> */}

export default TodoForm;