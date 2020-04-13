import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }
    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefualt();
        this.props.addTodo(this.state.todoText);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                    placeholder='...todo'
                />
                <button className='add-btn'>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;
