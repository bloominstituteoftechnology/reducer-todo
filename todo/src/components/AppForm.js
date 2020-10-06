import React from "react"


export function AppForm ( { submitTodo, handleChange, inputTodo } ) {
    return (
        <div className="formContainer">
            <form>
                <label>New To Do</label>
                <textarea 
                    id="newTodo"
                    placeholder="What do you need to do?"
                    type="textarea"
                    onChange={handleChange}
                    value={inputTodo}
                />
                <button onClick={submitTodo}>Submit</button>
            </form>
        </div>
    )
}
export default AppForm;