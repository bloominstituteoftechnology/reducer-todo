import React from 'react';
import TodoList from './components/todoComponents/TodoList';
import TodoForm from './components/todoComponents/TodoForm';
import './App.css';
import './components/todoComponents/Todo.css';



const todo = [
  {
    task: 'Clean Bathroom',
    id: 102939204456,
    completed: false
  },
  {
    task: 'Make Sourdough',
    id: 103209430928,
    completed: false
  }

]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todo
    }
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  //removeTodo goes here
  removeTodo = () => {
    const filterTodo = this.state.todoList.filter(todo => !todo.completed);
    this.setState({
      todoList: filterTodo
    })
  };

  //App will be the parent component of the application per usual
  //will handle state and change handlers to manage state changes


  render() {
    return (
      <div className="todo-card">
        <h1>My Todo App!</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todo={this.state.todoList}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
