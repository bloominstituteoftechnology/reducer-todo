import React from "react";
class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            newItem: ""
        };
    }
handelChanges = event => {
    this.setState( {...this.state, newItem: event.target.value});
}
handelSubmit = event => {
    event.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({newItem: ""})
}
render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input>
            onChange={this.handleChanges}
            type="text"
            task= "todo"
            value={this.state.newItem}
            </input>
            <button> Add </button>
        </form>
        <button
        onClick={this.props.clearCompleted}
        >
            Clear Completed
        </button>
        </div>
    );
}

}
export default TodoForm