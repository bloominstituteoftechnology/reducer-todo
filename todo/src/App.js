import React, {Component} from 'react';
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm';
import "./components/Todo.css"



//created a sample list
const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){  //CONSTRUCTOR
    super();
    this.state = {
      list: list
    };
  }

  //class methods to update state
  //toggle item
  toggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  //clear purchased
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter((item) =>{
        return !item.completed
      })
    });
  };

  //addItem 
  addItem = (itemName) =>{
    console.log("bk: index.js: App: AddItem: addName: ", itemName)
    this.setState({
      list: [
        ...this.state.list,
        {id:Date.now(), name: itemName, completed: false}
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
        list = {this.state.list}
        clearCompleted={this.clearCompleted}
        toggleItem = {this.toggleItem}/>
      </div>
    );
  }
}

export default App;