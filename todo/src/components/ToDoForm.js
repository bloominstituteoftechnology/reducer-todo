import React, { Component } from 'react'

class ToDoForm extends Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = event => {
        this.setState({ item: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToDo(this.state.item)
        this.setState({ item: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='inputField'
                        type='text'
                        name='item'
                        value={this.state.item}
                        placeholder='Add Your To Do Item'
                        onChange={this.handleChanges}
                    />
                    <button>Add To List</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm