import React from 'react'

const Todo = () => {
    return (
        <div className="formContainer">
            <form>
                <label>New To Do</label>
                <textarea 
                    id="newTodo"
                    placeholder="What do you need to do?"
                    type="textarea"
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Todo;