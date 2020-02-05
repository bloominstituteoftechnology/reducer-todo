import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const todo=
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
    {
      task: 'Groceries',
      id: 1528817077287,
      completed: false
    },
    {
      task: 'Gardening',
      id: 1528817084359,
      completed: false
    },
  
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
   state={
     todoList: todo,
     Name: ""
   };
   addNewItem = newItemName =>{
     const newState ={
       ...this.state,
       todoList:[
         ...this.state.todoList,
         {task: newItemName, id: Date.now(),
        completed: false }
       ] 
     };
     this.setState(newState);
   }
   toggleCompleted = id => {
     const newState = {
       ...this.state, todo: this.state.todo.map(item =>{
       if (item.id === id) {
         return {
           ...item, completed: !item.completed
         };
       }
       return item;
     })};
     this.setState(newState);
    };
    clearCompleted= () =>{
      const newState = {
        ...this.state,
        TodoList: this.state.TodoList.filter(item =>{
          return !item.completed;
        })
      };
      this.setState(newState);
    };
  
  render() {
    console.log ('rendering...');
    return (
      
        <div>
        <h2>To Do List!</h2>
        <TodoForm addNewItem = {this.addNewItem}/>
      
        <TodoList 
        todo = {this.state.task}
        toggleCompleted= {this.toggleCompleted}
        clearCompleted = {this.clearCompleted}/>
      </div>
    );
    }
  }

export default App;
