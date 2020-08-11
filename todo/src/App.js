import React from 'react';
import ReactDOM from "react-dom";
import TodoForm from './hooks/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const todo = [
  {
    task: 'Finish Assignment',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Go To The Moon',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  toggleItem = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })//do this in order to see state change
    console.log(this.state.todo)
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearTodo = e => {
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed
      })
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 onClick={() => this.setState({})}>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          todo={this.state.todo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);