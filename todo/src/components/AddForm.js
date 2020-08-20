import React from 'react'

// When adding tasks can I use a switch statement inside the map
// to add incompleted items to the a top component and completed
// items to a botom component?

class AddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = event => {
        console.log(event)
        this.setState({ [event.target.name]: event.target.value });
    }

    submitTask = event => {
        event.preventDefault(); this.setState({ task: "" });
        this.props.addTask(event, this.state.task);
    }

    render() {
        return (
            <form className='todo-addForm' onSubmit={this.submitTask}>
                <input
                    type='text'
                    name='task'
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button className='todo-button'>Add Task</button>
            </form>
        );
    }
}

export default AddForm;
