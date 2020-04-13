import React from 'react';
import TodoList from './components/todoComponents/TodoList';
// import TodoForm from './components/todoComponents/TodoForm';
import './App.css';



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

  // toggleTodo = id => {
  //   const newTodoList = this.state.todoList.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       };
  //     } else {
  //       return todo;
  //     });
  //     this.setState({
  //       todoList: newTodoList
  //     });
  //   };

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


}









function App() {
  return (
    <div className="todo-card">
      <h1>My Todo App!</h1>
    </div>
  );
}

export default App;
