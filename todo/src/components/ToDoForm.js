import React from "react";

class ToDoForm extends React.Component {
    state = {
        inputText: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.inputText);
    }

    handleChange = (e) => {
        this.setState({
            inputText:e.target.value
        });
    }

    render() {
        return (
            <div className="toDoForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input onChange={this.handleChange} value={this.state.inputText}/>
                    </label>
                <button>Submit ToDo</button>
                </form>
            </div>
        )
    }

}

export default ToDoForm;

