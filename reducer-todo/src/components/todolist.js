import React from 'react'

const TodoList = ({todoArr, toggleTodo}) => {
console.log("TCL: TodoList -> toggleTodo", toggleTodo)
console.log("TCL: TodoList -> todoArray", todoArr)

return (
        <div>            
        {todoArr.map(todo => (
            <div key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "completed" : ""}>
                {todo.item}
            </div>
        ))}
            
        </div>
    )
}

export default TodoList