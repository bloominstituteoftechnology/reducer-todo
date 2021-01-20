import React from 'react'

class TodoForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddTodo('popping')
  }

  render(){
    return (
      <div classNAme="todoForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input />
          </label>
          <button>Submit Todo</button>
        </form>
      </div>
    )
  }

}

export default TodoForm;