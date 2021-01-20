import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

  return(
    <div className="todoList">
      <h3>List of items</h3>
      <ul>
        {
          props.todos.map(todo => {
            return (<Todo todo={todo} />)
          })
        }
        <li>todo 1</li>
        <li>todo 2</li>
        <li>todo 3</li>
      </ul>
      <button>Clear completed</button>
    </div>
  )
}

export default TodoList;