import React from 'react'

class TodoForm extends React.Component {
state = {
    inputValue : ''
}
 onChange = (e) => {
    this.setState({
        inputValue: e.target.value})
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.handleAddTodo(this.state.inputValue)
      this.setState({
          inputValue: ''
      })

  }
    render() {
        return (

<div className="todoForm">
<form onSubmit={this.onSubmit}>
    <label>
        Task:
        <input onChange = {this.onChange} value={this.state.inputValue} />
    </label>
    <button>Submit Todo</button>
</form>
</div>
        )
    }
}

{/* <input 
type='text'
placeholder='toDo'
name='todoForm'
onChange={onChange}
value={inputValue}
/> */}

export default TodoForm;