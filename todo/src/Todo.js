import React from 'react'

const Todo = ({ onClick, completed, item }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {item}
  </li>
)

export default Todo