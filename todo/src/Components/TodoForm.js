import React, { Component, useState } from "react";

/*
  what is a reducer?
  1. reducer is a function that takes 2 arguments: (state={}, action={})
  2. reducer will then, based on the action, create a new state from existing state
  3. if the reducer is not interested in the action, it returns the existing state
  4. reducer will return the new state

  define action:
  1. object that has a required `type` key <---- - Required
  2. object that has an optional `payload` key (doesn't need to be called payload) <--- -Not required
*/
 
class TodoForm extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      newTodoText: 'Its something'
    }
  }

  // const [newTodoText, setNewTodoText] = useState('Its react');
   handleChanges = (e) => {
    this.setState({newTodoText: e.target.value});
    // console.log('nal ',newTodoText)
  };



   handleSub   = (e) =>{
    // e.preventDefault();
    this.props.handleSubmit(this.state.newTodoText);

  }

  render(){
    return (
      <div> 
          <form onSubmit={e => this.handleSub}>
              <div>
                  <input
                      className="title-input"
                      type="text"
                      name="newTitleText"
                      value={this.state.newTodoText}
                      onChange={this.handleChanges}
                  />
                  <button type="submit"
                  >
                      ☠New🐊 🥵Todo☠ 
                  </button>
              </div>
          </form> 
      </div>
    );
  }
};

export default TodoForm;
