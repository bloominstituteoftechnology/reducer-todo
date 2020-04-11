import React from "react";

class TodoForm extends React.Component {
    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            id: Date.now(),
            complete: false
        })
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="todo..."
                />       
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>

        );
    }
}

export default TodoForm;