import React from 'react';


// - Build a form to add todos to your list
class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTodo: '',
        };
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Do it, heaux");
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    };

    render() {
        
        console.log('rending form');
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New ToDo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;