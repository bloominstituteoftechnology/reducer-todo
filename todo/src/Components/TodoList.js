import React from 'react'
import TodoForm from '../Forms/TodoForm'
import Todo from './Todo'


const TodoList = props => {
  const {
    todos,
    handleAddTodo,
    toggleCompleted,
    clearCompleted
  } = props;

  return (
    <div>
      {todos && todos.map((todo) => {
        return <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
        />
      })}
      <TodoForm
        handleAddTodo={handleAddTodo}
        clearCompletedItems={clearCompleted}
      />
    </div>
  )
}
export default TodoList
