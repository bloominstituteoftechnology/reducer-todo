import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: todoList,
    };
  }

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      list: [...this.state.list, newItem],
    });
  };

  deleteItem = (e) => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };
  toggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      <div className="App">
        <TodoForm addItem={this.addItem} />
        <TodoList
          list={this.state.list}
          toggleItem={this.toggleItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
  };