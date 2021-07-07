import React from "react";

const TodosForm = (props) => {
  const { title, onChange, addTodo, clearCompleted } = props;
  return (
          <div className="todos-form">
            <input name="title" type="text" value={title} onChange={onChange} />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        );

}

export default TodosForm;