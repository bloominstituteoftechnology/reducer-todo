import React, {useState} from 'react'

function Input({addTodo}) {
    const [input, setInput] = useState("");
    const updateForm = (e) => {
        setInput(e.target.value);
      };

      const updateTodoList = (e) => {
        e.preventDefault();
        addTodo({ type: "ADD_NEW_TODO", payload: input });
      };

    return (
        <div className="input">
        <form onSubmit={updateTodoList}>
          <input
            name="todo"
            id="todo"
            type="text"
            autoComplete="off"
            onChange={updateForm}
            placeholder="Create A Todo"
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
}

export default Input
