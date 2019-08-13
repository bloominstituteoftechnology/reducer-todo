import React, { useState, useReducer } from 'react';


import { iniState, todoReducer } from '../../reducers/todoReducer';


class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        todo: ''
      };
    }
  
    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    submitTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state.todo);
    };
  
    render() {
      return (
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            value={this.todo}
            name="todo"
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      );
    }
  }
  
  export default TodoForm;