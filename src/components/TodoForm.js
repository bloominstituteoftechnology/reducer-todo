import React from 'react';
export default class TodoForm extends React.Component {

    state = {
        inputText: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.inputText)
    }
    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    render(){

    return( <div className="todoForm">
    <form onSubmit={this.handleSubmit}>
      <label>
        Title:
        <input onChange={this.handleChange} value={this.state.inputText}></input>
      </label>
      <button>Submit Form</button>
    </form>
  </div>
)   
  
}
}