import React, {useState, setState} from 'react';
import Todo from './components/TodoComponents/Todo'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


const App = () => { 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    const [todos] = useState(todos)
    
    
  

  const filterCompleted=()=> {
    setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }

  const toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }

      })
    })
  }

  const addTodo = task => {
    setState({
      todos: [...todos,{
        task: task,
        id: Date.now(),
        completed: false
      }]
      
    });
  };




    return ( 
    <div >
      <h2 > Welcome to your Todo App! </h2> {
        /* {this.state.todos.map(todo =>  <div> {todo.task} </div>)} */ } <
      TodoList todos = {
        todos
      }
      toggleCompleted = {
        toggleCompleted
      }
      /> 
      <TodoForm addTodo={addTodo} filterCompleted = {filterCompleted}/>
      </div>
    );
    } 
  

export default App;